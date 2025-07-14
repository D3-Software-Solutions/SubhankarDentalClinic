import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const AddTestimonialPage = () => {
  const [name, setName] = useState('');
  const [testimonial, setTestimonial] = useState('');
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
      formData.append('name', name);
      formData.append('testimonial', testimonial);
      images.forEach(img => formData.append('images', img));
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit testimonial');
      }
      setSuccess(true);
      setName('');
      setTestimonial('');
      setImages([]);
      setPreviewUrls([]);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  // Detect if running on static hosting (no window.location.origin or localhost)
  const isStatic = typeof window !== 'undefined' && window.location.hostname !== 'localhost' && !window.location.hostname.includes('127.0.0.1');

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 min-h-screen bg-white">
        <div className="container mx-auto px-4 max-w-xl">
          <h1 className="text-3xl font-bold text-primary mb-8 text-center">Add a Testimonial</h1>
          {isStatic && (
            <div className="bg-yellow-100 text-yellow-800 p-4 rounded-xl text-center mb-6 shadow">
              <b>Note:</b> Submitting testimonials is only available when running on a server (not on static hosting like GitHub Pages).
            </div>
          )}
          {success ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-xl text-center mb-8 shadow">
              Thank you for your testimonial! It will appear after review.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-6">
              <div>
                <label className="block font-semibold mb-2 text-primary">Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Testimonial</label>
                <textarea
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent min-h-[100px]"
                  value={testimonial}
                  onChange={e => setTestimonial(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-primary">Upload Images (optional, multiple allowed)</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="block w-full text-gray-700"
                  disabled={loading}
                />
                {previewUrls.length > 0 && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    {previewUrls.map((url, idx) => (
                      <img
                        key={idx}
                        src={url}
                        alt={`Preview ${idx + 1}`}
                        className="w-24 h-24 object-cover rounded shadow"
                      />
                    ))}
                  </div>
                )}
              </div>
              {error && <div className="text-red-600 text-center font-semibold">{error}</div>}
              <button
                type="submit"
                className="bg-accent text-white font-bold py-2 px-6 rounded-full shadow hover:bg-accent-dark transition disabled:opacity-60"
                disabled={loading || isStatic}
              >
                {loading ? 'Submitting...' : 'Submit Testimonial'}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AddTestimonialPage; 