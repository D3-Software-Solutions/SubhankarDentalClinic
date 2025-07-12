import { useState, useEffect } from 'react';

interface Blog {
  id: number;
  title: string;
  slug: string;
  date: string;
  content: string;
  excerpt: string;
  image?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string;
}

const emptyBlog: Partial<Blog> = {
  title: '',
  slug: '',
  date: '',
  content: '',
  excerpt: '',
  image: '',
  seoTitle: '',
  seoDescription: '',
  seoKeywords: '',
};

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [editing, setEditing] = useState<Partial<Blog> | null>(null);
  const [form, setForm] = useState<Partial<Blog>>(emptyBlog);
  const [message, setMessage] = useState('');

  // Login handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    const res = await fetch('/api/admin-creds');
    const creds = await res.json();
    if (username === creds.username && password === creds.password) {
      setLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      setLoginError('Invalid credentials');
    }
  };

  // Fetch blogs
  const fetchBlogs = async () => {
    const res = await fetch('/api/blogs');
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    if (loggedIn) fetchBlogs();
  }, [loggedIn]);

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = (blog: Blog) => {
    setEditing(blog);
    setForm(blog);
    setMessage('');
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this blog post?')) return;
    await fetch('/api/blogs', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id }) });
    setMessage('Deleted successfully');
    fetchBlogs();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) {
      await fetch('/api/blogs', { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, id: editing.id }) });
      setMessage('Updated successfully');
    } else {
      await fetch('/api/blogs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      setMessage('Created successfully');
    }
    setForm(emptyBlog);
    setEditing(null);
    fetchBlogs();
  };

  if (!loggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <form className="bg-white p-8 rounded shadow-md w-full max-w-xs space-y-4" onSubmit={handleLogin} aria-label="Admin login form">
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
          <div>
            <label htmlFor="username" className="block font-semibold mb-1">Username</label>
            <input id="username" name="username" type="text" autoComplete="username" required className="w-full border px-3 py-2 rounded" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full border px-3 py-2 rounded" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {loginError && <div className="text-red-600 text-sm">{loginError}</div>}
          <button type="submit" className="w-full bg-accent text-white font-bold py-2 rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Blog Admin Dashboard</h1>
        <button className="mb-6 text-accent underline" onClick={() => { setLoggedIn(false); setMessage(''); }}>Logout</button>
        <div className="bg-white rounded shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">{editing ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
          {message && <div className="text-green-600 mb-2">{message}</div>}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit} aria-label="Blog post form">
            <div>
              <label className="block font-semibold mb-1">Title *</label>
              <input name="title" type="text" required className="w-full border px-3 py-2 rounded" value={form.title || ''} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Slug *</label>
              <input name="slug" type="text" required className="w-full border px-3 py-2 rounded" value={form.slug || ''} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Date *</label>
              <input name="date" type="date" required className="w-full border px-3 py-2 rounded" value={form.date || ''} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-semibold mb-1">Image Filename</label>
              <input name="image" type="text" className="w-full border px-3 py-2 rounded" value={form.image || ''} onChange={handleChange} placeholder="e.g. my-photo.jpg" />
              <div className="text-xs text-gray-500 mt-1">Upload image to <b>/public/blog-images/</b> and enter filename here. (Optional)</div>
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Excerpt</label>
              <input name="excerpt" type="text" className="w-full border px-3 py-2 rounded" value={form.excerpt || ''} onChange={handleChange} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">Content *</label>
              <textarea name="content" required className="w-full border px-3 py-2 rounded min-h-[120px]" value={form.content || ''} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-semibold mb-1">SEO Title</label>
              <input name="seoTitle" type="text" className="w-full border px-3 py-2 rounded" value={form.seoTitle || ''} onChange={handleChange} />
            </div>
            <div>
              <label className="block font-semibold mb-1">SEO Description</label>
              <input name="seoDescription" type="text" className="w-full border px-3 py-2 rounded" value={form.seoDescription || ''} onChange={handleChange} />
            </div>
            <div className="md:col-span-2">
              <label className="block font-semibold mb-1">SEO Keywords</label>
              <input name="seoKeywords" type="text" className="w-full border px-3 py-2 rounded" value={form.seoKeywords || ''} onChange={handleChange} />
            </div>
            <div className="md:col-span-2 flex gap-4 mt-2">
              <button type="submit" className="bg-accent text-white font-bold py-2 px-6 rounded">{editing ? 'Update' : 'Create'}</button>
              {editing && <button type="button" className="bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded" onClick={() => { setEditing(null); setForm(emptyBlog); }}>Cancel</button>}
            </div>
          </form>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h2 className="text-xl font-bold mb-4">All Blog Posts</h2>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Image</th>
                <th className="p-2">Title</th>
                <th className="p-2">Slug</th>
                <th className="p-2">Date</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map(blog => (
                <tr key={blog.id} className="border-t">
                  <td className="p-2">
                    {blog.image ? (
                      <img src={`/blog-images/${blog.image}`} alt="Blog" className="w-16 h-16 object-cover rounded" />
                    ) : (
                      <span className="text-gray-400 text-xs">No image</span>
                    )}
                  </td>
                  <td className="p-2">{blog.title}</td>
                  <td className="p-2">{blog.slug}</td>
                  <td className="p-2">{blog.date}</td>
                  <td className="p-2 flex gap-2">
                    <button className="text-blue-600 underline" onClick={() => handleEdit(blog)}>Edit</button>
                    <button className="text-red-600 underline" onClick={() => handleDelete(blog.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 