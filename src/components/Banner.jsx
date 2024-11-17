import React from 'react'
import iconRating from "../assets/onestart.png";
import img from "../assets/temp.jpg";
import play from "../assets/play-button.png";

const Banner = () => {
  return <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover
  relative">
    <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
        <div className="w-full h-full flex items-center m-auto p-10 justify-center space-x-[30px] relative z-20">
            <div className="flex flex-col space-y-5 items-baseline w-[50%]">
                <p className="text-white bg-gradient-to-r
                from-red-600 to-red-300 text-md py-2 px-3">TV Show</p>
                <div className="flex flex-col space-y-4">
                <h2 className="text-white text-3xl font-bold">Samurai thời Edo</h2>
                <div className="flex items-center space-x-3">
                    <img src={iconRating} alt="rating" className="h-8 w-8" />
                    <img src={iconRating} alt="rating" className="h-8 w-8" />
                    <img src={iconRating} alt="rating" className="h-8 w-8" />
                    <img src={iconRating} alt="rating" className="h-8 w-8" />
                    <img src={iconRating} alt="rating" className="h-8 w-8" />
                </div>
                <p className="text-white">Cốt truyện diễn ra trong thời Edo, khi Nhật Bản chia cắt thành các lãnh thổ bị thống trị bởi các lãnh chúa (daimyo) tàn bạo. 
                    Nhân vật chính là một samurai lưu lạc, bị ám ảnh bởi ký ức về gia đình bị sát hại trong một cuộc xâm lược. 
                    Trên hành trình báo thù, anh khám phá ra một âm mưu đen tối liên quan đến việc các lãnh chúa sử dụng ma thuật hắc ám để củng cố quyền lực. 
                    Đồng hành cùng anh là một phù thủy lưu vong và một tên trộm trẻ. 
                    Họ phải đối mặt với những quái vật siêu nhiên và các sát thủ để giải cứu đất nước khỏi thế lực hắc ám, tìm lại danh dự và trả thù.</p>
                <div className="flex items-center space-x-4">
                    <button className="p-3 text-white bg-black font-bold text-lg rounded-xl">Chi Tiết</button>
                    <button className="p-3 text-white bg-red-500 font-bold text-lg rounded-xl">Xem Phim</button>
                </div>
            </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <div className="w-[400px] h-[500px] relative group cursor-pointer">
                    <img src={img} alt="temp" className="w-full h-full object-cover rounded-xl"/>
                    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out rounded-xl">
                        <img src={play} alt="play" className="w-16 h-16 relative z-20"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Banner