# Images for Phyllia Website

This directory contains all the images used on the Phyllia website.

## Adding Images

### Team Member Photos

To add a team member photo:

1. Place the image in the `/images/team/` directory
2. Name the file consistently (e.g., `member1.jpg`, `member2.jpg`, etc.)
3. Update the `imageUrl` property in `src/data/teamData.js` with the path to the image (e.g., `/images/team/member1.jpg`)

### Logo

To add the company logo:

1. Place the logo file in the root of the `/images/` directory
2. Name it `logo.svg` (preferably SVG format for better quality)
3. The logo will automatically be used in the navbar and potentially other places

### Page-Specific Images

- **Hero Image**: Place in `/images/` directory and name it `hero.jpg`
- **About Page Images**: Place in `/images/about/` directory

### Image Requirements

- **Team member photos**: Square format recommended (1:1 ratio), minimum 500x500px
- **Logo**: SVG format preferred, transparent background
- **Hero image**: 16:9 or 2:1 ratio, minimum 1920x1080px
- **Feature/section images**: 16:9 ratio, minimum 800x450px

### Updating Image Paths

You can update image paths in the `src/config.js` file under the `images` section:

```javascript
images: {
  logo: '/images/logo.svg',
  hero: '/images/hero.jpg',
  about: '/images/about/main.jpg',
  og: '/images/og-image.jpg',
}
```

## Image Optimization

Before adding images to the website, please optimize them to reduce file size:

- Use JPG format for photos (80-90% quality)
- Use PNG format for images with transparency
- Use SVG format for logos and icons
- Compress images using tools like TinyPNG (https://tinypng.com/) or ImageOptim

## Social Media Sharing Image

The `og-image.jpg` file in the root of the `/images/` directory is used for social media sharing (Open Graph). This image should be:

- 1200x630 pixels (ratio of 1.91:1)
- Less than 1MB in size
- Representative of the Phyllia brand 