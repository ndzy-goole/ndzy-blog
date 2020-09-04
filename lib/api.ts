import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

export function getPostSlugs() {
  let dir: { slug: string; fullPath: string }[] = [];
  const readDir = (entry: string) => {
    const dirInfo = fs.readdirSync(entry);
    dirInfo.forEach((item) => {
      const location = path.join(entry, item);
      const info = fs.statSync(location);
      if (info.isDirectory()) {
        // console.log(`dir:${location}`);
        readDir(location);
      } else {
        dir.push({
          slug: item,
          fullPath: location
        });
        // console.log(`file:${location}`);
      }
    });
  };
  readDir(postsDirectory);
  return dir;
}

export function getPostBySlug(
  slug: { slug: string; fullPath: string },
  fields: string[] = []
) {
  const realSlug = slug.slug.replace(/\.md$/, '');
  const fileContents = fs.readFileSync(slug.fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  items['fullPath'] = slug.fullPath;
  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
