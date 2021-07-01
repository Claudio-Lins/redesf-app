export type PostID = number;

export type PostAuthor = {
    id: PostID;
    name: string;
    email: string;
    created_by: number;
    updated_by: number;
    created_at: string;
    updated_at: string;
  };

  export type PostCategory = {
    id: PostID;
    name: string;
    slug: string;
    created_by: number;
    updated_by: number;
    created_at: string;
    updated_at: string;
  };

"id": 1,
    "title":
    "description":
    "content":
    "slug":
    },
    "author": {
      "picture": {
        "id": 2,
        "name": "daviddoe@strapi.io.jpg",
        "alternativeText": null,
        "caption": null,
        "width": 2418,
        "height": 2711,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_daviddoe@strapi.io.jpg",
            "hash": "thumbnail_daviddoe_strapi_io_7325f5e5df",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 139,
            "height": 156,
            "size": 4.37,
            "path": null,
            "url": "/uploads/thumbnail_daviddoe_strapi_io_7325f5e5df.jpg"
          },
          "large": {
            "name": "large_daviddoe@strapi.io.jpg",
            "hash": "large_daviddoe_strapi_io_7325f5e5df",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 892,
            "height": 1000,
            "size": 74,
            "path": null,
            "url": "/uploads/large_daviddoe_strapi_io_7325f5e5df.jpg"
          },
          "medium": {
            "name": "medium_daviddoe@strapi.io.jpg",
            "hash": "medium_daviddoe_strapi_io_7325f5e5df",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 669,
            "height": 750,
            "size": 44.52,
            "path": null,
            "url": "/uploads/medium_daviddoe_strapi_io_7325f5e5df.jpg"
          },
          "small": {
            "name": "small_daviddoe@strapi.io.jpg",
            "hash": "small_daviddoe_strapi_io_7325f5e5df",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "width": 446,
            "height": 500,
            "size": 22.69,
            "path": null,
            "url": "/uploads/small_daviddoe_strapi_io_7325f5e5df.jpg"
          }
        },
        "hash": "daviddoe_strapi_io_7325f5e5df",
        "ext": ".jpg",
        "mime": "image/jpeg",
        "size": 587.69,
        "url": "/uploads/daviddoe_strapi_io_7325f5e5df.jpg",
        "previewUrl": null,
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2021-06-29T20:42:10.319Z",
        "updated_at": "2021-06-29T20:42:10.319Z"
      }
    },
    "published_at": "2021-06-29T20:42:10.373Z",
    "created_at": "2021-06-29T20:42:10.374Z",
    "updated_at": "2021-06-29T20:42:10.381Z",
    "image": {
      "id": 5,
      "name": "the-internet-s-own-boy.jpg",
      "alternativeText": null,
      "caption": null,
      "width": 1200,
      "height": 707,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_the-internet-s-own-boy.jpg",
          "hash": "thumbnail_the_internet_s_own_boy_6664e9e12c",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "width": 245,
          "height": 144,
          "size": 8.37,
          "path": null,
          "url": "/uploads/thumbnail_the_internet_s_own_boy_6664e9e12c.jpg"
        },
        "large": {
          "name": "large_the-internet-s-own-boy.jpg",
          "hash": "large_the_internet_s_own_boy_6664e9e12c",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "width": 1000,
          "height": 589,
          "size": 70.3,
          "path": null,
          "url": "/uploads/large_the_internet_s_own_boy_6664e9e12c.jpg"
        },
        "medium": {
          "name": "medium_the-internet-s-own-boy.jpg",
          "hash": "medium_the_internet_s_own_boy_6664e9e12c",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "width": 750,
          "height": 442,
          "size": 46.12,
          "path": null,
          "url": "/uploads/medium_the_internet_s_own_boy_6664e9e12c.jpg"
        },
        "small": {
          "name": "small_the-internet-s-own-boy.jpg",
          "hash": "small_the_internet_s_own_boy_6664e9e12c",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "width": 500,
          "height": 295,
          "size": 24.99,
          "path": null,
          "url": "/uploads/small_the_internet_s_own_boy_6664e9e12c.jpg"
        }
      },
      "hash": "the_internet_s_own_boy_6664e9e12c",
      "ext": ".jpg",
      "mime": "image/jpeg",
      "size": 91.55,
      "url": "/uploads/the_internet_s_own_boy_6664e9e12c.jpg",
      "previewUrl": null,
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2021-06-29T20:42:10.764Z",
      "updated_at": "2021-06-29T20:42:10.764Z"
    }
  },