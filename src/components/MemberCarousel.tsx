import React, { VFC } from 'react'
import Image from 'next/image'
import Slider  from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { MembersLinks } from '../data/members'

let memberLinks = []
for (let i = 0; i < MembersLinks.length; i+=3) {
  memberLinks.push(MembersLinks.slice(i, i+3));
}

const MemberCarousel: VFC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="my-10">
      <Slider {...settings}>
        {MembersLinks.map((member, i) => (
          <div key={i} className="text-center">
            <Image src={member.icon} width={100} height={100} className="rounded-full" />
            <p className="text-2xl">{member.name}</p>
            {member.role ? (
              <p>{member.role}</p>
            ) : (
              <p>未定</p>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MemberCarousel
