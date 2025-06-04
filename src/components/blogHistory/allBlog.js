'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import BlogHeader from './blogHeader';
import { BsCalendar3 } from 'react-icons/bs';

import LocalDataFor2D from '../../../public/data/blog2D.json';
import LocalDataFor3D from '../../../public/data/blog3D.json';
import Footer from '../footer/footer';
import Image from 'next/image';

const AllBlog = () => {
  const filteredBlogs = useMemo(() => {
    const combined = [...LocalDataFor2D, ...LocalDataFor3D];
    return combined
      .map((item) => ({
        ...item,
        slug: item.slug,
      }))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  return (
    <>
      <BlogHeader btnColor={true} />
      <div className="p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredBlogs.map((items, index) => (
              <Link
                href={`/blog/${items.slug}`}
                key={index}
                aria-label="industry trends details"
              >
                <div className="card_of_blog justify-center border-0 p-0">
                  <div className="cardImage">
                    {/* <img src={items.thumb} alt={items.title} /> */}
                    <div className="relative w-full aspect-[16/9]">
  <Image
    src={items.thumb}
    alt={items.title}
    fill
    className="object-cover"
  />
</div>
                  </div>
                  <div className="cardCaption ps-4 pt-5 pb-5 pe-5">
                    <h3 className="cardTitle">{items.title}</h3>
                    <p className="cardDes">{items.metaDescription}</p>
                    <div className="readAndDate">
                      <button>
                        Read More
                        <div className="center-con">
                          <div className="round">
                            <div id="cta">
                              <span className="arrow primera next"></span>
                              <span className="arrow segunda next"></span>
                            </div>
                          </div>
                        </div>
                      </button>
                      <p className="date">
                        <BsCalendar3 className="inline mr-1" />
                        {items.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBlog;
