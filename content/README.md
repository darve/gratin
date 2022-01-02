### Content

This folder houses the individual pieces of content for the site, be it blog posts, links, images etc. .

Each post / item needs a folder with a url-friendly name. The folder needs a file called `meta.js` which describes the nature of the item (examples below). In addition to this file, if the item is a post it will also need a file called `content.md` for its uhhhhh contents.

```javascript
/**
 * Types:
 *     => Post
 *     => Image
 *     => Link
 *     => Text
 */

const post_meta = {
    type: 'post',
    title: ''
};

const image_meta = {
    type: 'image',
    url: ''
};

const link_meta = {
    type: 'link',
    title: '',
    image_url: '',
    link_url: ''
};

const text_meta = {
    type: 'text',
    title: ''
};

export default post_meta;
/**
	This would export a POST type
**/
```
