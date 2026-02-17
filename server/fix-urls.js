const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Blog = require('./models/blogModel');

dotenv.config();

const DB = process.env.MONGODB_URI;
const OLD_DOMAIN = 'http://localhost:5000';
const NEW_DOMAIN = 'https://anoop-john.onrender.com';

async function migrateUrls() {
  try {
    console.log('Connecting to DB...');
    await mongoose.connect(DB);
    console.log('Connected!');

    const blogs = await Blog.find({ image: { $regex: OLD_DOMAIN } });
    console.log(`Found ${blogs.length} blogs with localhost URLs.`);

    for (let blog of blogs) {
      const originalUrl = blog.image;
      const updatedUrl = originalUrl.replace(OLD_DOMAIN, NEW_DOMAIN);
      blog.image = updatedUrl;
      await blog.save();
      console.log(`Updated: ${blog.title}`);
    }

    console.log('Migration complete!');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

migrateUrls();
