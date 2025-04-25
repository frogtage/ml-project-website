import Image from "next/image";

export default function Unsupervised() {
  return (
    <div className="container">
      <h1 className="global-header">یادگیری بدون نظارت</h1>
      <p className="global-text">
        یادگیری بدون نظارت، همچنین به عنوان یادگیری ماشین بدون نظارت شناخته می
        شود، از الگوریتم های یادگیری ماشین (ML) برای تجزیه و تحلیل و خوشه بندی
        مجموعه داده های بدون برچسب استفاده می کند. این الگوریتم ها الگوهای پنهان
        یا گروه بندی داده ها را بدون نیاز به دخالت انسان کشف می کنند.
      </p>
      <div className="-image-container">
        <Image
          src="/Unsupervised-learning.webp"
          width={1000}
          height={800}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
