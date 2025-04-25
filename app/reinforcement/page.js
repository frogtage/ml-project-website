export default function Reinforcement() {
  return (
    <div className="container">
      <h1 className="global-header">یادگیری تقویتی (Reinforcement Learning)</h1>
      <p className="global-text">
        یادگیری تقویتی (RL) شاخه ای از یادگیری ماشینی است که بر چگونگی تصمیم
        گیری عوامل از طریق آزمون و خطا برای به حداکثر رساندن پاداش های تجمعی
        تمرکز دارد. RL به ماشین ها اجازه می دهد تا با تعامل با یک محیط و دریافت
        بازخورد بر اساس اقدامات خود، یاد بگیرند. این بازخورد به صورت پاداش یا
        جریمه است.
      </p>
      <br />
      <p className="global-text">
        یادگیری تقویتی حول این ایده می چرخد ​​که یک عامل (یادگیرنده یا تصمیم
        گیرنده) برای رسیدن به یک هدف با یک محیط تعامل می کند. عامل برای بهینه
        سازی تصمیم گیری خود در طول زمان اقداماتی را انجام می دهد و بازخورد
        دریافت می کند.
      </p>
      <div className="reinforce-container">
        <div className="reinforce-text-main">
          <h2 className="reinforce-subheader">Agent :</h2>
          <p className="reinforce-text">
            تصمیم گیرنده ای که اقداماتی را انجام می دهد.
          </p>

          <h2 className="reinforce-subheader">Environment :</h2>
          <p className="reinforce-text">
            جهان یا سیستمی که عامل در آن فعالیت می کند.
          </p>

          <h2 className="reinforce-subheader">State :</h2>
          <p className="reinforce-text">
            وضعیت یا شرایطی که نماینده در حال حاضر در آن است.
          </p>

          <h2 className="reinforce-subheader">Action :</h2>
          <p className="reinforce-text">
            حرکات یا تصمیمات احتمالی که نماینده می تواند بگیرد.
          </p>

          <h2 className="reinforce-subheader">Reward :</h2>
          <p className="reinforce-text">
            بازخورد یا نتیجه محیط بر اساس عمل عامل.
          </p>
        </div>
        <div className="reinforce-image">
          <div className="reinforce-image-container">
            <img
              src="/reinforcement-learning.webp"
              width={700}
              height={700}
              alt="supervised-learning"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
