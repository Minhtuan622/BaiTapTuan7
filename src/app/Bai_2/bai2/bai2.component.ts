import { Component, OnInit } from '@angular/core';

interface posts {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-bai2',
  templateUrl: './bai2.component.html',
  styleUrls: ['./bai2.component.css']
})
export class Bai2Component implements OnInit {
  public baiviet: posts[] = [
    {
      id: 1,
      title: 'Djokovic: ‘Tôi là tay vợt hay nhất’',
      content: "Novak Djokovic tin bản thân là tay vợt hay nhất sau khi thắng trận chung kết\n" +
        "          Wimbledon hôm 11/7 để san bằng kỷ lục 20 Grand Slam. \"Tôi tự xem bản thân là \n" +
        "          người giỏi nhất và tin vào điều đó\", ATP dẫn lời Novak Djokovic sau trận chung kết \n" +
        "          Wimbledo n. \"Nếu không tin vào bản thân, tôi sẽ không tự tin nói về việc vô địch \n" +
        "          Grand Slam và tạ o nên lịch sử. Nhưng dù tôi có phải người hay nhất mọi thời không, \n" +
        "          tôi vẫn để cuộc tranh luận đó cho người khác. Tôi từng nói trước đây rằng rất khó \n" +
        "          để so sánh các kỷ nguyên quần vợt khác nhau\"."
    },
    {
      id: 2,
      title: "HLV Southgate: 'Tôi chọn thứ tự luân lưu'",
      content: "HLV Gareth Southgate nhận hoàn toàn trách nhiệm về thứ tự cầu thủ sú\n" +
        "            t luân lưu, khi Anh thua Italy ở chung kết Euro tối 11/7. \"Chúng tôi cực kỳ thất vọng\",\n" +
        "            Southgate nói với BBC. \"Các cầu thủ đã cố gắng cật lực, chạy không ngừng nghỉ. Có lúc ch\n" +
        "            úng tôi chơi tốt, cũng có lúc không cầm bóng đủ lâu, đặc biệt từ khi bắt đầu hiệp hai. C\n" +
        "            húng tôi đã vượt xa mong đợi, nhưng hôm nay phòng thay đồ quá buồn bã. Trách nhiệm thuộc\n" +
        "            về tôi. Tôi đã chọn thứ tự cầu thủ đá luân lưu, dựa theo thành tích trong các buổi tập.\n" +
        "            Không ai tự nhận quyền sút cả. Chúng tôi thắng cùng nhau, và hôm nay không thể thắng th\n" +
        "            ì tất cả đều phải nhận trách nhiệm. Nhưng trong loạt đá luân lưu, lỗi hoàn toàn thuộc về\n" +
        "            tôi\"."
    },
    {
      id: 3,
      title: "Italy vô địch Euro 2021",
      content: "Sau hơn nửa thế kỷ chờ đợi kể từ lần đăng quang gần nhất ở Euro 1968\n" +
        "            , Italy lại bước lên đỉnh vinh quang của bóng đá châu Âu. Thầy trò Roberto Mancini còn l\n" +
        "            àm nên lịch sử khi trở thành đội tuyển đầu tiên thắng liền hai trận knock-\n" +
        "            out bằng loạt đá luân lưu ở vòng chung kết giải vô địch châu lục. Trên sân Wembley hôm q\n" +
        "            ua, Jorginho không thể thành công với cú đá ở lượt sút thứ năm như khi hạ Tây Ban Nha hô\n" +
        "            m 7/7. Nhưng lần này, tới lượt thủ môn Gianluigi Donnarumma trở thành người hùng, lần lư\n" +
        "            ợt từ chối Jadon Sancho rồi Bukayo Saka ở các lượt sút thứ tư và năm của tuyển Anh, để đ\n" +
        "            ịnh đoạt phần thắng 3-2 cho Italy."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
