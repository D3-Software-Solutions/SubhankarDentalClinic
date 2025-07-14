import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AddBlogPage = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDescription, setSeoDescription] = useState('');
  const [seoKeywords, setSeoKeywords] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImages(files);
      setPreviewUrls(files.map(file => URL.createObjectURL(file)));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('slug', slug);
      formData.append('date', date);
      formData.append('content', content);
      formData.append('excerpt', excerpt);
      formData.append('seoTitle', seoTitle);
      formData.append('seoDescription', seoDescription);
      formData.append('seoKeywords', seoKeywords);
      images.forEach(img => formData.append('images', img));
      const res = await fetch('/api/blogs', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit blog');
      }
      setSuccess(true);
      setTitle('');
      setSlug('');
      setDate('');
      setContent('');
      setExcerpt('');
      setSeoTitle('');
      setSeoDescription('');
      setSeoKeywords('');
      setImages([]);
      setPreviewUrls([]);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isStatic = typeof window !== 'undefined' && window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1');

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">Add a Blog Post</h1>
          {isStatic && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl text-center mb-6 shadow">
              <b>Note:</b> Submitting blogs is only available when running on a server (not on static hosting like GitHub Pages).
            </div>
          )}
          {success ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center mb-8 shadow">
              Blog post submitted successfully!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-6">
              <div>
                <label className="block font-semibold mb-2 text-primary">Title</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" value={title} onChange={e => setTitle(e.target.value)} required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Slug (URL)</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" value={slug} onChange={e => setSlug(e.target.value)} required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Date</label>
                <input type="date" className="w-full border border-gray-300 rounded px-4 py-2" value={date} onChange={e => setDate(e.target.value)} required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Content</label>
                <textarea className="w-full border border-gray-300 rounded px-4 py-2 min-h-[120px]" value={content} onChange={e => setContent(e.target.value)} required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Excerpt</label>
                <textarea className="w-full border border-gray-300 rounded px-4 py-2 min-h-[60px]" value={excerpt} onChange={e => setExcerpt(e.target.value)} required disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">SEO Title (optional)</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" value={seoTitle} onChange={e => setSeoTitle(e.target.value)} disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">SEO Description (optional)</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" value={seoDescription} onChange={e => setSeoDescription(e.target.value)} disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">SEO Keywords (optional)</label>
                <input type="text" className="w-full border border-gray-300 rounded px-4 py-2" value={seoKeywords} onChange={e => setSeoKeywords(e.target.value)} disabled={loading} />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Upload Images (optional, multiple allowed)</label>
                <input type="file" accept="image/*" multiple onChange={handleImageChange} className="block w-full text-gray-700" disabled={loading} />
                {previewUrls.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {previewUrls.map((url, idx) => (
                      <img key={idx} src={url} alt={`Preview ${idx + 1}`} className="w-24 h-24 object-cover rounded shadow" />
                    ))}
                  </div>
                )}
              </div>
              {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
              <button type="submit" className="bg-accent text-white font-bold py-2 px-6 rounded-full shadow hover:bg-accent-dark transition disabled:opacity-60" disabled={loading || isStatic}>
                {loading ? 'Submitting...' : 'Submit Blog'}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddBlogPage; 