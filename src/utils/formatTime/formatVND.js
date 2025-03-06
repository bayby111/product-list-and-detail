export function formatVND(amount) {
    if (!amount || isNaN(amount)) return "0 VNĐ"; // Kiểm tra giá trị hợp lệ
    return Number(amount).toLocaleString('vi-VN') + " VNĐ";
}