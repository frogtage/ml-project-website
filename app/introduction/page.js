import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className="container">
        <div className="intro-main-container">
          <h1 className="intro-header">1. مقدمه ای بر یادگیری ماشین</h1>
          <p className="intro-text">
            یادگیری ماشینی (ML) شاخه‌ای از هوش مصنوعی (AI) است که به رایانه‌ها
            اجازه می‌دهد بدون برنامه‌ریزی صریح برای هر کار، یاد بگیرند و
            پیش‌بینی یا تصمیم بگیرند. در عوض، از داده ها برای (آموزش) برای درک
            الگوها، پیش بینی ها و بهبود عملکرد در طول زمان استفاده کنید.
            <br /> <br />
            به عبارت ساده تر، ML رایانه ها را قادر می سازد تا به طور خودکار
            عملکرد خود را در یک کار از طریق تجربه بهبود بخشند. درست همانطور که
            انسان ها از تجربیات خود یاد می گیرند، ماشین ها نیز از داده های ارائه
            شده به آنها یاد می گیرند.
            <br />
            <br /> به طور کلی می توان آن را به سه نوع طبقه بندی کرد: <br />
            <br />
            <p className="intro-temp-dive1">
              Supervised Learning ,Unsupervised Learning ,Reinforcement Learning
            </p>
          </p>
          <Image
            className="intro-image"
            src="/intro.webp"
            width={600}
            height={600}
            alt="intro"
          />
        </div>
        <div className="intro-sub-container">
          <div className="intro-supervised">
            <h3>1. Supervised Learning</h3>
            <p className="intro-text">
              در یادگیری نظارت شده، مدل بر روی داده های برچسب دار آموزش داده می
              شود، به این معنی که هر ورودی (داده ها) یک خروجی مربوطه (برچسب)
              دارد. این مدل رابطه بین ورودی ها و خروجی ها را یاد می گیرد و سپس
              می تواند خروجی ها را برای داده های جدید و دیده نشده پیش بینی کند.
            </p>
          </div>
          <div className="intro-unsupervised">
            <h3>2. Unsupervised Learning</h3>
            <p className="intro-text">
              در یادگیری بدون نظارت، داده ها دارای برچسب نیستند. مدل فقط ورودی
              داده می شود و باید الگوها یا روابط بین آنها را پیدا کند. اغلب نقاط
              داده مشابه را با هم گروه بندی می کند.
            </p>
          </div>
          <div className="intro-reinforce">
            <h3>3. Reinforcement Learning</h3>
            <p className="intro-text">
              یادگیری تقویتی (RL) شامل یک عامل (مدل) است که از طریق آزمون و خطا
              از طریق تعامل با یک محیط یاد می گیرد. عامل برای اقدامات خوب پاداش
              و برای اعمال بد جریمه دریافت می کند و رفتار خود را برای به حداکثر
              رساندن پاداش در طول زمان تنظیم می کند.
            </p>
          </div>
          <Image
            className="intro-sub-image"
            src="/Types-of-Machine-Leaning.gif"
            width={400}
            height={600}
            alt="Types-of-Machine-Leaning"
          />
        </div>
      </div>
    </>
  );
}
