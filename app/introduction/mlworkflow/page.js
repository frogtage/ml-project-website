import Image from "next/image";

export default function Mlworkflow() {
  return (
    <div className="container">
      <h1 className="workflow-header">چرخه حیات یادگیری ماشین</h1>
      <p className="workflow-text">
        چرخه حیات یادگیری ماشینی فرآیندی است که توسعه و استقرار مدل‌های یادگیری
        ماشین را به روشی ساختاریافته هدایت می‌کند. از مراحل مختلفی تشکیل شده
        است. هر مرحله نقش مهمی در تضمین موفقیت و اثربخشی مدل یادگیری ماشین دارد.
        با پیروی از چرخه زندگی یادگیری ماشینی می‌توانیم مشکلات پیچیده را حل
        کنیم، می‌توانیم بینش‌های مبتنی بر داده‌ها را به دست آوریم و مدل‌های
        مقیاس‌پذیر و پایدار ایجاد کنیم.
      </p>
      <h2 className="workflow-sub-header">مراحل:</h2>
      <div className="workflow-items-container">
        <ul className="workflow-items">
          <li>
            <span>1.</span> تعریف مشکل
          </li>
          <li>
            <span>2.</span> جمع آوری داده ها
          </li>
          <li>
            <span>3.</span> پاکسازی و پیش پردازش داده ها
          </li>
          <li>
            <span>4.</span> تجزیه و تحلیل داده های اکتشافی
          </li>
          <li>
            <span>5.</span> مهندسی ویژگی و انتخاب
          </li>
          <li>
            <span>6.</span> انتخاب مدل
          </li>
          <li>
            <span>7.</span> آموزش مدل
          </li>
          <li>
            <span>8.</span> ارزیابی و تنظیم مدل
          </li>
          <li>
            <span>9.</span> استقرار مدل
          </li>
          <li>
            <span>10.</span> نظارت و نگهداری مدل
          </li>
        </ul>
        <div className="workflow-image-container">
          <Image
            className="workflow-image"
            src="/mlworkgflow.webp"
            width={500}
            height={500}
            alt="workgflow"
          />
        </div>
      </div>
    </div>
  );
}
