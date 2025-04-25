import Image from "next/image";

export default function RandomForest() {
  return (
    <div className="container">
      <h1 className="global-header">Random Forest</h1>
      <p className="global-text">
        الگوریتم جنگل تصادفی یک تکنیک یادگیری درختی قدرتمند در یادگیری ماشینی
        است تا پیش‌بینی کند و سپس برای پیش‌بینی همه تراشه‌ها رای‌گیری می‌کنیم.
        آنها به طور گسترده ای برای طبقه بندی و کار رگرسیون استفاده می شوند. این
        یک نوع طبقه بندی کننده است که از درخت های تصمیم گیری زیادی برای پیش بینی
        استفاده می کند. برای آموزش هر درخت به بخش‌های تصادفی مختلفی از مجموعه
        داده نیاز است و سپس نتایج را با میانگین‌گیری آنها ترکیب می‌کند. این
        رویکرد به بهبود دقت پیش بینی ها کمک می کند. این الگوریتم مبتنی بر
        یادگیری گروهی است.
      </p>
      <div className="randomForest-image-container">
        <Image
          src="/Random-Forest-Algorithm.webp"
          width={800}
          height={400}
          alt="supervised-learning"
        />
      </div>
    </div>
  );
}
