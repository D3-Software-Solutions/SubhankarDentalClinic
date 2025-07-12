const db = require('../utils/db');
const { initDb } = require('../utils/initDb');

db.exec('DROP TABLE IF EXISTS blogs;');
initDb();

const blogs = [
  {
    title: 'Emergency Dental Care: What You Need to Know',
    slug: 'emergency-dental-care',
    date: '2024-03-10',
    content: `Understanding when to seek emergency dental care and how modern treatment protocols can provide quick relief from dental pain.\n\nIf you experience severe pain, swelling, or trauma, contact Dentique Specialist Dental Clinic in Agartala for immediate relief.`,
    excerpt: 'Understanding when to seek emergency dental care and how modern treatment protocols can provide quick relief from dental pain.',
    image: null,
    seoTitle: 'Emergency Dental Care in Agartala | Dentique',
    seoDescription: 'Learn when to seek emergency dental care in Agartala and how Dentique provides fast pain relief.',
    seoKeywords: 'emergency dental care, dental pain relief, best dentist in Agartala',
  },
  {
    title: 'Professional Teeth Whitening vs Home Remedies',
    slug: 'teeth-whitening-vs-home-remedies',
    date: '2024-03-05',
    content: `Discover the benefits of professional teeth whitening treatments and why they're more effective than home remedies.\n\nDentique offers safe, long-lasting whitening for a confident smile.`,
    excerpt: `Discover the benefits of professional teeth whitening treatments and why they're more effective than home remedies.`,
    image: null,
    seoTitle: 'Teeth Whitening in Agartala | Professional vs Home Remedies',
    seoDescription: 'Compare professional teeth whitening with home remedies. Get a brighter smile at Dentique, Agartala.',
    seoKeywords: 'teeth whitening Agartala, professional teeth whitening, best dentist in Agartala',
  },
  {
    title: 'Maxillofacial Surgery: When Is It Needed?',
    slug: 'maxillofacial-surgery-agartala',
    date: '2024-02-28',
    content: `Learn about maxillofacial surgery procedures and when they might be necessary for your dental health.\n\nDr. Subhankar Paul is a specialist in maxillofacial surgery in Agartala.`,
    excerpt: 'Learn about maxillofacial surgery procedures and when they might be necessary for your dental health.',
    image: null,
    seoTitle: 'Maxillofacial Surgery in Agartala | Dentique',
    seoDescription: 'Find out when maxillofacial surgery is needed and how Dentique can help.',
    seoKeywords: 'maxillofacial surgery Agartala, dental surgery, best dentist in Agartala',
  },
  {
    title: 'Preventing Dental Cavities: A Complete Guide',
    slug: 'preventing-dental-cavities',
    date: '2024-02-20',
    content: `Comprehensive tips and strategies to prevent dental cavities and maintain excellent oral hygiene at home.\n\nVisit Dentique in Agartala for preventive dental care.`,
    excerpt: 'Comprehensive tips and strategies to prevent dental cavities and maintain excellent oral hygiene at home.',
    image: null,
    seoTitle: 'Preventing Dental Cavities | Best Dentist in Agartala',
    seoDescription: 'Tips to prevent dental cavities and maintain oral health. Visit Dentique in Agartala.',
    seoKeywords: 'prevent dental cavities, oral hygiene, best dentist in Agartala',
  },
  {
    title: 'Choosing the Right Dentist in Agartala',
    slug: 'choosing-right-dentist-agartala',
    date: '2024-02-15',
    content: `Important factors to consider when selecting a dental clinic and what makes Dentique the best choice for your family.\n\nTrust Dr. Subhankar Paul for expert dental care in Agartala.`,
    excerpt: 'Important factors to consider when selecting a dental clinic and what makes Dentique the best choice for your family.',
    image: null,
    seoTitle: 'Best Dentist in Agartala | How to Choose',
    seoDescription: 'How to choose the best dentist in Agartala. Why Dentique is the top choice.',
    seoKeywords: 'best dentist in Agartala, dental clinic Agartala, family dentist',
  },
  {
    title: 'Importance of Routine Dental Checkups',
    slug: 'importance-routine-dental-checkups',
    date: '2024-03-15',
    content: `Learn why regular dental checkups are crucial for preventing dental diseases and maintaining optimal oral health throughout your life.\n\nBook your checkup at Dentique Specialist Dental Clinic in Agartala.`,
    excerpt: 'Learn why regular dental checkups are crucial for preventing dental diseases and maintaining optimal oral health throughout your life.',
    image: null,
    seoTitle: 'Routine Dental Checkups in Agartala | Dentique',
    seoDescription: 'Why routine dental checkups matter. Book your appointment at Dentique, Agartala.',
    seoKeywords: 'routine dental checkup, dental clinic Agartala, best dentist in Agartala',
  },
];

const stmt = db.prepare(`
  INSERT OR REPLACE INTO blogs (title, slug, date, content, excerpt, image, seoTitle, seoDescription, seoKeywords)
  VALUES (@title, @slug, @date, @content, @excerpt, @image, @seoTitle, @seoDescription, @seoKeywords)
`);

for (const blog of blogs) {
  stmt.run(blog);
}

console.log('Seeded blogs table with sample posts.'); 