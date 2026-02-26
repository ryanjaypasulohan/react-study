import React from 'react'

const LatestBlog = () => {

    const blogs = [
        {
            title: "Blog 1",
            blogBannerURL: "https://placehold.co/1920x600",
            blogThumbnail: "https://placehold.co/300x300",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis iste veritatis. Voluptatem eaque, consequuntur iusto nisi dolore rerum est?",
            author: "jhon doe 1",
            dateCreated: "02-09-2023",
            datePlubished: "02-10-2023",
        },
        {
            title: "Blog 2",
            blogBannerURL: "https://placehold.co/1920x600",
            blogThumbnail: "https://placehold.co/300x300",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis iste veritatis. Voluptatem eaque, consequuntur iusto nisi dolore rerum est?",
            author: "jhon doe 2",
            dateCreated: "02-09-2023",
            datePlubished: "02-10-2023",
        },
        {
            title: "Blog 3",
            blogBannerURL: "https://placehold.co/1920x600",
            blogThumbnail: "https://placehold.co/300x300",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis iste veritatis. Voluptatem eaque, consequuntur iusto nisi dolore rerum est?",
            author: "jhon doe 3",
            dateCreated: "02-09-2023",
            datePlubished: "02-10-2023",
        },
        {
            title: "Blog 4",
            blogBannerURL: "https://placehold.co/1920x600",
            blogThumbnail: "https://placehold.co/300x300",
            description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate perferendis iste veritatis. Voluptatem eaque, consequuntur iusto nisi dolore rerum est?",
            author: "jhon doe 4",
            dateCreated: "02-09-2023",
            datePlubished: "02-10-2023",
        },
    ]

  return (
    <div className="latest_blog_con py-15">
        <div className="wrapper">
            <div className="latestBlogInfo text-center py-10">
                <h2>Latest of Our Blog</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente officia fugiat tempore earum consequuntur aspernatur velit autem repudiandae cumque necessitatibus.</p>
            </div>
            <div className="blog_container flex flex-wrap gap-5 justify-between">
                {blogs.map((blog, index) => (
                    <div className="blog_box w-3xs" key={index}>
                        <figure><img src={blog.blogThumbnail} alt={blog.title} /></figure>
                        <h2 className="text-center mt-5">{blog.title}</h2>
                        <p className='text-center'>{blog.description}</p>
                        <a href="#" className="block text-center mt-3 text-blue-600 hover:underline">Read More</a>
                    </div>
                ))}
            </div>
            <a href="" className="block text-center mt-5 text-white underline md:underline-offset-4">Visit All Blogs</a>
        </div>
    </div>
  )
}

export default LatestBlog
