import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
}

const defaultTitle = 'Best Dentist in Agartala | Dentique Specialist Dental Clinic | Dr. Subhankar Paul';
const defaultDescription = 'Looking for the best dentist in Agartala? Visit Dentique Specialist Dental Clinic led by Dr. Subhankar Paul BDS MDS Maxillofacial Surgeon. Expert dental care, teeth whitening, and emergency dental treatments.';
const defaultKeywords = 'best dentist in Agartala, dental clinic near me, teeth whitening Agartala, Dr Subhankar Paul, maxillofacial surgeon Agartala, dental pain relief, routine dental checkup';
const defaultUrl = 'https://dentique-agartala.com';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  'name': 'Dentique Specialist Dental Clinic',
  'description': defaultDescription,
  'image': `${defaultUrl}/logo.png`,
  'url': defaultUrl,
  'telephone': '+91-8259000114',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Ganaraj Chawmani Laxmi, Lakshmi Narayan Bari Rd, opposite shri krishna mandir, Banamalipur, Indranagar, Agartala, Tripura 799001',
    'addressLocality': 'Agartala',
    'addressRegion': 'Tripura',
    'postalCode': '799001',
    'addressCountry': 'India',
  },
  'openingHours': [
    'Mo-Sa 09:00-20:00',
    'Su 10:00-18:00',
  ],
  'priceRange': '$$',
  'aggregateRating': {
    '@type': 'AggregateRating',
    'ratingValue': '4.8',
    'reviewCount': '150',
  },
  'founder': {
    '@type': 'Person',
    'name': 'Dr. Subhankar Paul',
    'jobTitle': 'BDS MDS Maxillofacial Surgeon',
  },
};

const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  url = defaultUrl,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Dentique Specialist Dental Clinic, Dr. Subhankar Paul" />
    {/* Open Graph */}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:phone_number" content="+91-8259000114" />
    <meta property="og:street-address" content="Ganaraj Chawmani Laxmi, Lakshmi Narayan Bari Rd, opposite shri krishna mandir, Banamalipur, Indranagar, Agartala, Tripura 799001" />
    {/* Twitter Card */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    {/* Schema Markup */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </Head>
);

export default SEO; 