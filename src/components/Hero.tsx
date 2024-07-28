"use client";

export default function Hero() {
  return (
    <div className="container mx-auto my-16">

      <h1 className="text-center text-3xl font-bold text-red-500 mb-8">Phần mềm quét Facebook UID và chuyển đổi UID sang SĐT</h1>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 shadow hover:shadow-xl rounded space-y-4">
          <div className="mx-auto text-3xl text-white bg-yellow-500 font-semibold space-x-2 px-4 py-2 flex items-center justify-center">
            <img
              width={24}
              src="https://i.pinimg.com/originals/84/4e/8c/844e8cd4ab26c82286238471f0e5a901.png"
            />
            <span className="text-xl uppercase">Quét số nóng từ quảng cáo đối thủ</span>
          </div>
          <img width={96} className="mx-auto" src="https://fbuid.net/assets/images/install-facebook.png" />
          <ul className="p-8 space-y-2 h-44 text-lg">
            <li className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png"
              />
              <span>Quét thông tin khách hàng từ bài quảng cáo đang chạy</span>
            </li>
            <li className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png"
              />
              <span>
                Thông tin khách hàng quét được đầy đủ chi tiết, gọi chốt nóng
                hoặc ib đều được
              </span>
            </li>
            <li className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png"
              />
              <span>
                Không cần tốn tiền chạy ads Facebook vẫn có số nóng chốt đơn
                hiệu quả
              </span>
            </li>
          </ul>

          <div className="py-8 flex justify-center">
            <a
              className="p-2 border bg-blue-500 font-semibold text-white hover:bg-blue-600 rounded"
              href="https://t.me/toolquet"
            >
              Dùng thử ngay
            </a>
          </div>
        </div>
        <div className="col-span-6 shadow hover:shadow-xl rounded space-y-4">
          <div className="space-x-2 text-3xl text-white bg-blue-500 mx-auto font-semibold px-4 py-2 flex items-center justify-center">
            <img
              width={24}
              src="https://cdn-icons-png.flaticon.com/512/6473/6473808.png"
            />
            <span className="text-xl uppercase">Chuyển đổi UID sang SĐT</span>
          </div>
          <img width={96} className="mx-auto" src="https://fbuid.net/assets/images/success.png" />

          <ul className="p-8 space-y-2 h-44 text-lg">
          <li className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png"
              />
              <span>Chuyển đổi danh sách UID hoặc file excel có chứa cột UID sang SĐT</span>
            </li>
            <li className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png"
              />
              <span>Tỉ lê chuyển đổi cao nhất thị trường ( >80%)</span>
            </li>
            <li className="flex space-x-2">
              <img
                className="w-6 h-6"
                src="https://www.iconpacks.net/icons/2/free-check-icon-3278-thumb.png"
              />
              <span>
              Độ chính xác của SĐT cao nhất thị trường ( >99%)
              </span>
            </li>
          </ul>

          <div className="py-8 flex justify-center">
            <a
              className="p-2 border bg-blue-500 font-semibold text-white hover:bg-blue-600 rounded"
              href="/sign-in"
            >
             Chuyển đổi UID to Phone
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
