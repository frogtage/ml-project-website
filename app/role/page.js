import Image from "next/image";

export default function Role() {
  return (
    <div className="container">
      <h1 className="global-header">
        نقش هوش مصنوعی و یادگیری ماشین در توسعه نرم افزار مدرن
      </h1>
      <p className="global-text">
        ایجاد سیستم های کامپیوتری که به طور طبیعی قادر به انجام فعالیت هایی
        هستند که نیاز به هوش انسانی دارند، به عنوان هوش مصنوعی (AI) شناخته می
        شود. این برنامه ها از تصمیم گیری، یادگیری و استدلال انسانی تقلید می
        کنند. در هوش مصنوعی (AI)، یادگیری ماشین (ML) مطالعه الگوریتم‌ها و
        مدل‌های آماری است. بدون برنامه نویسی صریح، آنها به رایانه ها اجازه می
        دهند از داده ها یاد بگیرند و به تدریج عملکرد خود را بهبود بخشند. ترکیب
        هوش مصنوعی و ML توسعه نرم افزار را تغییر داده و باعث پیشرفت و نوآوری شده
        است.
      </p>
      <div className="supervisedLearning-image-container">
        <Image
          src="/role.webp"
          width={700}
          height={500}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
