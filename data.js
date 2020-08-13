/*1. rename all picture: using cmd 
- create a textfile to fetch all the current picture's names: 
- open cmd and using dir> img.txt to get all filenames in the textfiles
- Using Excel to create the new names with the syntax ren "oldfilename" "newfilename"
- Copy all to commandline*/

window.allItemsData = [
  {
    categories: 'A Cupcake',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Bouquet',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
  },
  {
    categories: 'A Bouquet',
    title: 'Ut Enim Ad Minima ',
    rating: 2.5,
    price: 22,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Ut enim Quia Sit',
    rating: 5,
    price: 12,
    image: {
      mainImg: './images/product-3.jpg',
      smallImg1: './images/product-3-1.jpg',
      smallImg2: './images/gallery-3-2.jpg',
      smallImg3: './images/gallery-3-3.jpg',
      smallImg4: './images/gallery-3-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },

    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Bouquet',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Bouquet',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Bouquet',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 12.55,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Bouquet',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Cupcake',
    title: 'Quis Nostrud Exercitation',
    rating: 2.5,
    price: 24,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Bouquet',
    title: 'Quis Nostrum Exer',
    rating: 5,
    price: 17.85,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Bouquet',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Bouquet',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Bouquet',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },

  {
    categories: 'A Bouquet',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
  },
  {
    categories: 'A Cupcake',
    title: 'Us Error Sit Voluptatem',
    rating: 2.5,
    price: 21.75,
    image: {
      mainImg: './images/product-7.jpg',
      smallImg1: './images/product-7-1.jpg',
      smallImg2: './images/gallery-7-2.jpg',
      smallImg3: './images/gallery-7-3.jpg',
      smallImg4: './images/gallery-7-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Bouquet',
    title: 'Qui Dolorem Ipsum Quia',
    rating: 5,
    price: 22.77,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Bouquet',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Bouquet',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Bouquet',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Cupcake',
    title: 'Voluptatem Accusantium ',
    rating: 2.5,
    price: 27,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Iui Doloww Ipes',
    rating: 5,
    price: 15.55,
    image: {
      mainImg: './images/product-7.jpg',
      smallImg1: './images/product-7-1.jpg',
      smallImg2: './images/gallery-7-2.jpg',
      smallImg3: './images/gallery-7-3.jpg',
      smallImg4: './images/gallery-7-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Cupcake',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Bouquet',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Cupcake',
    title: 'Us Error Sit Voluptatem Accusantium ',
    rating: 2.5,
    price: 20,
    image: {
      mainImg: './images/product-3.jpg',
      smallImg1: './images/product-3-1.jpg',
      smallImg2: './images/gallery-3-2.jpg',
      smallImg3: './images/gallery-3-3.jpg',
      smallImg4: './images/gallery-3-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Quia Dolor Sit',
    rating: 5,
    price: 10,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Cupcake',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Cupcake',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Bouquet',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Cupcake',
    title: 'Us Error Sit Voluptatem Accusantium ',
    rating: 2.5,
    price: 20,
    image: {
      mainImg: './images/product-3.jpg',
      smallImg1: './images/product-3-1.jpg',
      smallImg2: './images/gallery-3-2.jpg',
      smallImg3: './images/gallery-3-3.jpg',
      smallImg4: './images/gallery-3-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Quis nostrum',
    rating: 5,
    price: 10,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Cupcake',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Cupcake',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Bouquet',
    title: 'Us Error Sit Voluptatem Accusantium ',
    rating: 2.5,
    price: 20,
    image: {
      mainImg: './images/product-3.jpg',
      smallImg1: './images/product-3-1.jpg',
      smallImg2: './images/gallery-3-2.jpg',
      smallImg3: './images/gallery-3-3.jpg',
      smallImg4: './images/gallery-3-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Qui Dolorem Ipsum Quia Dolor Sit',
    rating: 5,
    price: 10,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Cupcake',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Cupcake',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Bouquet',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Cupcake',
    title: 'Us Error Sit Voluptatem Accusantium ',
    rating: 2.5,
    price: 20,
    image: {
      mainImg: './images/product-3.jpg',
      smallImg1: './images/product-3-1.jpg',
      smallImg2: './images/gallery-3-2.jpg',
      smallImg3: './images/gallery-3-3.jpg',
      smallImg4: './images/gallery-3-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Qui Dolorem Ipsum Quia Dolor Sit',
    rating: 5,
    price: 10,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 2,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 5,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Cupcake',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 2,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  },
  {
    categories: 'A Cupcake',
    title: 'Et Accusamus Et Iusto Odio',
    rating: 4.5,
    price: 10,
    image: {
      mainImg: './images/product-1.jpg',
      smallImg1: './images/product-1-1.jpg',
      smallImg2: './images/gallery-1-2.jpg',
      smallImg3: './images/gallery-1-3.jpg',
      smallImg4: './images/gallery-1-4.jpg'
    },
    popularity: 3,
    sales: 25,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 15,
    image: {
      mainImg: './images/product-2.jpg',
      smallImg1: './images/product-2-1.jpg',
      smallImg2: './images/gallery-2-2.jpg',
      smallImg3: './images/gallery-2-3.jpg',
      smallImg4: './images/gallery-2-4.jpg'
    },
    popularity: 5,
    sales: 10,
    description:
      'Aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt'
  },
  {
    categories: 'A Cupcake',
    title: 'Us Error Sit Voluptatem Accusantium ',
    rating: 2.5,
    price: 20,
    image: {
      mainImg: './images/product-3.jpg',
      smallImg1: './images/product-3-1.jpg',
      smallImg2: './images/gallery-3-2.jpg',
      smallImg3: './images/gallery-3-3.jpg',
      smallImg4: './images/gallery-3-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.'
  },
  {
    categories: 'A Cupcake',
    title: 'Ut enim ad',
    rating: 5,
    price: 10,
    image: {
      mainImg: './images/product-4.jpg',
      smallImg1: './images/product-4-1.jpg',
      smallImg2: './images/gallery-4-2.jpg',
      smallImg3: './images/gallery-4-3.jpg',
      smallImg4: './images/gallery-4-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Iste Natus Error Sit Voluptatem',
    rating: 4.5,
    price: 10.5,
    image: {
      mainImg: './images/product-5.jpg',
      smallImg1: './images/product-5-1.jpg',
      smallImg2: './images/gallery-5-2.jpg',
      smallImg3: './images/gallery-5-3.jpg',
      smallImg4: './images/gallery-5-4.jpg'
    },
    popularity: 3,
    sales: 5,
    description:
      'Quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur'
  },
  {
    categories: 'A Cupcake',
    title: 'Odio Dignissimos Ducimus Qui',
    rating: 4.5,
    price: 11.25,
    image: {
      mainImg: './images/product-6.jpg',
      smallImg1: './images/product-6-1.jpg',
      smallImg2: './images/gallery-6-2.jpg',
      smallImg3: './images/gallery-6-3.jpg',
      smallImg4: './images/gallery-6-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description:
      'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta'
  },
  {
    categories: 'A Cupcake',
    title: 'Dolore Magnam Aliquam',
    rating: 4.5,
    price: 18,
    image: {
      mainImg: './images/product-8.jpg',
      smallImg1: './images/product-8-1.jpg',
      smallImg2: './images/gallery-8-2.jpg',
      smallImg3: './images/gallery-8-3.jpg',
      smallImg4: './images/gallery-8-4.jpg'
    },
    popularity: 5,
    sales: 0,
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
  }
];
