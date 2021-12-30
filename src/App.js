import React from "react";
import "./App.css";

import colors from "./utils/colors";
import Screen from "./components/Screen";

import ursinho_pandinha_ok from "./assets/ursinho_pandinha_ok.gif";
import ursinho_estudando from "./assets/ursinho_estudando.gif";
import pandinha_brava from "./assets/pandinha_fofa_cara_de_brava.gif";
import pandinha from "./assets/pandinha.gif";
import ursinho_S2_pandinha from "./assets/ursinho_S2_pandinha.gif";
import ursinha_chorando from "./assets/ursinha_chorando.gif";
import ursinho_chorando from "./assets/ursinho_chorando.gif";
import pandinha_martelo from "./assets/pandinha_martelo.png";
import ursinho_catucando_pandinha from "./assets/ursinho_catucando_pandinha.gif";
import ursinho_coracao from "./assets/ursinho_coracao.jpg";
import pandinha_coracao from "./assets/pandinha_coracao.gif";
import ursinhos_apaixonados from "./assets/ursinhos_apaixonados.gif";
import ursinhos_caminhada from "./assets/ursinhos_caminhada.jpg";
import ursinhos_fotinha from "./assets/ursinhos_fotinha.jpg";
import ursinhos_bebida from "./assets/ursinhos_bebida.gif";
import ursinha_mordidas from "./assets/ursinha_mordidas.gif";
import ursinho_pegando_no_sono from "./assets/ursinho_pegando_no_sono.gif";
import ursinhos_dormindo from "./assets/ursinhos_dormindo.gif";
import kieu2Nam from "./assets/kieu2Nam.jpg";

const App = () => {
  return (
    <div className="main">
      <Screen
        imageUrl={ursinho_pandinha_ok}
        bgColor={colors.red}
        textColor={colors.white}
        title="Đây là gấu trắng cute và gấu xám ngáo, một bên tên là bạn Kiều, một bên là bạn Nam"
        text="Họ đã gặp nhau từ rất lâu, khoảng năm 2019, bạn biết khum, hiện giờ ... họ đang hẹn hò đấy ^^."
        btnText="Muốn biết nhiều thông tin hơn khum :>>, Click vào đây"
        sequency="1"
      />
      <Screen
        imageUrl={ursinho_estudando}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Gấu xám ngáo "
        text="Chú gấu xám ngáo ngoài cái tính ngáo ra thì chú ấy còn rất lười, nhưng bù lại là khá vui tính, nó luôn làm cho gấu trắng cười, nhưng nó rất chậm chạp và không phải lúc nào cũng hiểu ý nghĩa của gấu trắng nói."
        btnText="Tiếp tục"
        sequency="2"
      />
      <Screen
        imageUrl={pandinha}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Gấu trắng Cute Kiều"
        text="Gáu trắng rất dễ thương, luôn lo lắng cho bạn gấu xám của mình, nhưng lâu lâu cô ấy cũng rất hay dỗi à nhen, hehe, nhưng cô ấy luôn làm cho gấu xám cười. Hoho. "
        btnText="Tiếp tục"
        sequency="3"
      />
      <Screen
        imageUrl={ursinho_S2_pandinha}
        bgColor={colors.red}
        textColor={colors.white}
        title="Gấu trắng Cute và gấu xám ngáo"
        text="Như tôi đã nói, hai người bây giờ là người yêu của nhau, họ không hoàn hảo ... nhưng họ luôn giúp đỡ nhau và cùng nhau vượt qua khó khăn."
        btnText="Tiếp tục"
        sequency="4"
      />
      <Screen
        imageUrl={ursinha_chorando}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Gấu trắng cute buồn"
        text="Đôi khi gấu trắng cute buồn về một số điều, và đang khóc và mặc xị xuống ... :( Nhưng chú gấu xám luôn đến để cố gắng làm cô ấy vui lên và hầu như luôn cố gắng làm cho cô ấy cười (Mặc dù lâu lâu gấu xám chính là nguyên nhân gây ra nổi buồn :>>) "
        btnText="Tiếp tục"
        sequency="5"
      />
      <Screen
        imageUrl={ursinho_chorando}
        bgColor={colors.green}
        textColor={colors.white}
        title="Gấu xám buồn"
        text="Đôi khi đó là con gấu xám buồn vì một số vấn đề, và sau đó gấu trắng đến với tình yêu và sự dễ thương của cô ấy và giúp đỡ khi anh ấy buồn. :)"
        btnText="Tiếp tục"
        sequency="6"
      />
      <Screen
        imageUrl={pandinha_martelo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Gấu xám chậm hiểu"
        text="Con gấu xám chậm chạp và đôi khi nó không hiểu chính xác ý nghĩa của gấu trắng cute nói, và nó hiểu nó hoàn toàn khác ..."
        btnText="Tiếp tục"
        sequency="7"
      />
      <Screen
        imageUrl={pandinha_brava}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Gấu trắng và sự dỗi của cô ấy"
        text="Gấu trắng RẤT YÊU, nhưng đôi khi sự dỗi của cô ấy đạt đỉnh điểm, hong thèm chơi với gấu xám  ... và đôi khi cô ấy tức giận vì con gấu xám ngáo ngơ."
        btnText="Tiếp tục nữa nè"
        sequency="8"
      />
      <Screen
        imageUrl={ursinho_catucando_pandinha}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Sự dỗ dành của gấu xám"
        text="Để làm cho cô gấu trắng của chúng ta hết giận thì anh ấy đã quyết định chọt chọt vào gấu trắng, đến khi gấu trắng quát mắng thì thôi =)))"
        btnText="Tui mỏi mợt quá, đọc tiếp nào :v"
        sequency="9"
      />
      <Screen
        imageUrl={ursinho_coracao}
        bgColor={colors.blue}
        textColor={colors.white}
        title="tình yêu của gấu xám"
        text="Sau nhiều giờ cố gắng giải thích, chú gấu xám này đã xin lỗi vì đã làm gấu trúc giận và khóc, nó nói rằng nó  rất yêu gấu trúc à nhen, và thương gấu trúc đến nhường nào."
        btnText="Ỏooooo <3"
        sequency="10"
      />
      <Screen
        imageUrl={pandinha_coracao}
        bgColor={colors.yellow}
        textColor={colors.white}
        title="Tình yêu của gấu trúc"
        text="Chú gấu trúc nhỏ đằng sau tất cả sự nhõng nhẽo của mình cũng rất thích con gấu xám, và nó nói rằng nó cũng yêu nó."
        btnText="Yêu nè hehe <3"
        sequency="11"
      />
      <Screen
        imageUrl={ursinhos_apaixonados}
        bgColor={colors.red}
        textColor={colors.white}
        title="Sau đó..."
        text="Sau khi mọi chuyện được giải quyết, cả hai đều ổn và hạnh phúc ... và họ làm rất nhiều điều cùng nhau như xem phim cùng nhau nè, gấu xám đi Gia Lai để gặp gấu Trúc nè"
        btnText="Còn nữa =]]]"
        sequency="12"
      />
      <Screen
        imageUrl={ursinhos_caminhada}
        bgColor={colors.pink}
        textColor={colors.white}
        title="Họ đi bộ cùng nhau"
        text="Cả hai thích đi dạo cùng nhau, họ cười rất nhiều, họ cùng nắm tay nhau đi qua nhiều nơi, và không ngại cho thế giới biết rằng họ đang yêu nhau <3 ~ hehe"
        btnText="Gần xong gòi..."
        sequency="13"
      />
      <Screen
        imageUrl={ursinhos_fotinha}
        bgColor={colors.green}
        textColor={colors.white}
        title="Họ chụp ảnh cùng nhau"
        text="Gấu trúc cute muốn xuất hiện thật hoàn hảo trong các bức ảnh, cô ấy luôn yêu cầu gấu bông chụp lại ~ cười"
        btnText="Chụp hình tách tách..."
        sequency="14"
      />
      <Screen
        imageUrl={ursinhos_bebida}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Uống cùng nhau"
        text="Gấu Xám và gấu trúc thích uống trà sữa cùng nhau và tận hưởng khoảng thời gian vui vẻ với một vài bản nhạc"
        btnText="1 2 3 zooo..."
        sequency="15"
      />
      <Screen
        imageUrl={ursinha_mordidas}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Gấu bông đang chơi với gấu bông"
        text="Gẫu trắng chơi kỳ quá, toàn đè gấu xám ra hoi ~ yêu chưa kìa"
        btnText="Cắn cắn..."
        sequency="16"
      />
      <Screen
        imageUrl={ursinho_pegando_no_sono}
        bgColor={colors.purple}
        textColor={colors.white}
        title="Vào ban đêm"
        text="Như một thoái quen vào mỗi ngày, khi gấu xám mở mắt hong nổi để nói chuyện với gấu trúc, họ nói lời tạm biệt, hun má và ngủ cùng nhau"
        btnText="Khò khò..."
        sequency="17"
      />
      <Screen
        imageUrl={ursinhos_dormindo}
        bgColor={colors.blue}
        textColor={colors.white}
        title="Chìm vào giấc ngủ"
        text="Hãy nhìn xem, họ có những lúc khó khăn, họ khóc, và họ tức giận ... nhưng khi mọi thứ đã ổn, họ yêu nhau rất nhiều và cười."
        btnText="Zzz..."
        sequency="18"
      />
      <Screen
        imageUrl={kieu2Nam}
        bgColor={colors.red}
        textColor={colors.white}
        title="Happy New Year"
        text="Anh yêu em rất nhiều, nhiều lúc hiểu sai ý nhau, giận nhau nhưng rồi mọi chuyện cũng quay về trạng thái ban đâu. Anh Yêu Em. Phan Thanh Kiều <3"
        btnText="Kết thúc gòi nhen !!! <3"
        sequency="19"
      />
    </div>
  );
};

export default App;
