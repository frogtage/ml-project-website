import Image from "next/image";

export default function DecisionTree() {
  return (
    <div className="container">
      <h1 className="global-header">درخت تصمیم گیری (Decision tree)</h1>
      <p className="global-text">
        درخت تصمیم یک نمایش گرافیکی از گزینه های مختلف برای حل یک مسئله است و
        نشان می دهد که عوامل مختلف چگونه با هم مرتبط هستند. این ساختار درختی
        سلسله مراتبی دارد که با یک سوال اصلی در بالا شروع می شود که گره نامیده
        می شود که بیشتر به نتایج ممکن مختلف منشعب می شود.
      </p>
      <div className="decisionTree-container">
        <div className="decisionTree-text">
          <h2 className="decisionTree-subheader">Root Node :</h2>
          <p className="decisionTree-text">
            نقطه شروعی است که کل مجموعه داده را نشان می دهد.
          </p>

          <h2 className="decisionTree-subheader">Branches :</h2>
          <p className="decisionTree-text">
            اینها خطوطی هستند که گره ها را به هم متصل می کنند. این جریان از یک
            تصمیم به تصمیم دیگر را نشان می دهد.
          </p>

          <h2 className="decisionTree-subheader">InternalNodes :</h2>
          <p className="decisionTree-text">
            نقاطی هستند که بر اساس ویژگی های ورودی تصمیم گیری می شود.
          </p>

          <h2 className="decisionTree-subheader">Leaf Node :</h2>
          <p className="decisionTree-text">
            اینها گره های پایانی در انتهای شاخه ها هستند که نتایج یا پیش بینی
            های نهایی را نشان می دهند
          </p>
        </div>
        <div className="decisionTree-image">
          <div className="logistic-image-container">
            <Image
              src="/Decition-tree.webp"
              width={600}
              height={600}
              alt="supervised-learning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
