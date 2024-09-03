import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
import Layout from "../../Layout";

const AboutPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#1976d2" }}>
            Hakkımızda
          </Typography>
          <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
            TimeSheet'e hoş geldiniz! Yenilikçi ve kullanımı kolay zaman takip
            çözümlerimizle proje yönetimini devrim niteliğinde değiştirmeye
            kararlıyız. Ekibimiz, projelerinizi verimli ve etkili bir şekilde
            yönetmenize yardımcı olmaya tutkuyla bağlıdır.
          </Typography>

          <Box
            sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Hikayemiz
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              2021 yılında kurulan TimeSheet, kısa sürede proje yönetimi
              yazılımlarında güvenilir bir isim haline geldi. Platformumuz,
              küçük girişimlerden büyük işletmelere kadar dünya çapında binlerce
              ekip tarafından kullanılmaktadır. Teknolojinin iş süreçlerini
              kolaylaştırma, iş birliğini artırma ve sonuçlar elde etme gücüne
              inanıyoruz.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              Misyonumuz, güçlü olmasının yanı sıra sezgisel ve kullanımı kolay
              bir araç sunmaktır. Kullanıcı deneyimine odaklanıyoruz,
              yazılımımızın herkes tarafından, teknik bilgi düzeyine
              bakılmaksızın erişilebilir olmasını sağlıyoruz. Sürekli gelişime
              bağlıyız ve kullanıcı geri bildirimlerine dayalı olarak
              platformumuzu düzenli olarak güncelliyoruz.
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              TimeSheet'te müşterilerimize değer veriyoruz ve uzun süreli
              ilişkiler kurmaya çalışıyoruz. Müşteri destek ekibimiz,
              karşılaşabileceğiniz her türlü soru veya sorunla ilgili olarak
              size yardımcı olmaya her zaman hazırdır. Biz sadece bir yazılım
              sağlayıcısı değiliz; başarınızda sizin ortağınızız.
            </Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Temel Değerlerimiz
            </Typography>
            <Stack
              spacing={4}
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Yenilikçilik
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Sürekli olarak yenilik yapmaya ve platformumuzu
                      geliştirmeye çalışıyoruz.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Müşteri Odaklılık
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Müşterilerimiz, yaptığımız her şeyin merkezindedir.
                      İhtiyaçlarınızı dinliyor ve size uygun çözümler sunuyoruz.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Dürüstlük
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      İşimizi en yüksek dürüstlük ve şeffaflık standartlarına
                      uygun şekilde yürütüyoruz.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Mükemmeliyet
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      İşimizin her alanında mükemmeliyeti hedefliyoruz.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </Box>

          <Box
            sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Ekibimizle Tanışın
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
              Ekibimiz, farklı geçmişlerden gelen yetenekli profesyonellerden
              oluşmaktadır. Yaptığımız işe tutkuyla bağlıyız ve müşterilerimize
              en iyi ürünü sunmayı taahhüt ediyoruz.
            </Typography>
            <Stack
              spacing={4}
              direction={{ xs: "column", md: "row" }}
              sx={{ justifyContent: "space-between" }}
            >
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Yıldız Argun - CEO
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Yıldız, TimeSheet'in vizyoner lideridir ve şirketi
                      yenilikçilik ve müşteri memnuniyeti odaklı yönetmektedir.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1, mb: { xs: 4, md: 0 } }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      İpek Tutku - CTO
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      İpek, TimeSheet'in teknolojik altyapısını en ileri düzeyde
                      tutan teknik bir dahidir.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#e3f2fd",
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ color: "#1976d2" }}
                    >
                      Kenan Şan - COO
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#555" }}>
                      Kenan, operasyonları yönetir ve her şeyin sorunsuz ve
                      verimli bir şekilde çalışmasını sağlar.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Neden Bizi Seçmelisiniz?
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}
            >
              Proje yönetimi yazılımı konusunda birçok seçeneğinizin olduğunu
              biliyoruz. İşte TimeSheet'i öne çıkaran nedenler:
            </Typography>
            <Box
              component="ul"
              sx={{
                maxWidth: "800px",
                margin: "0 auto",
                color: "#555",
                textAlign: "left",
                paddingLeft: "20px",
              }}
            >
              <li>
                <Typography variant="body1">
                  <strong>Kapsamlı Özellikler:</strong> Projelerinizi baştan
                  sona yönetmenize yardımcı olacak geniş bir özellik yelpazesi
                  sunuyoruz.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Kullanıcı Dostu Arayüz:</strong> Platformumuz
                  kullanıcıyı merkeze alarak tasarlanmıştır, bu sayede kullanımı
                  kolay ve gezinmesi basittir.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Üstün Destek:</strong> Destek ekibimiz her zaman
                  yanınızda, ihtiyaç duyduğunuz her an hızlı ve etkili yardım
                  sunuyor.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Uygun Fiyatlar:</strong> Her boyuttaki işletmeye uygun
                  rekabetçi fiyat planları sunuyoruz.
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <strong>Kendini Kanıtlamış Bir Geçmiş:</strong> Dünyanın dört
                  bir yanındaki binlerce ekip, projelerini etkili bir şekilde
                  yönetmek için TimeSheet'e güveniyor.
                </Typography>
              </li>
            </Box>
          </Box>

          <Box
            sx={{ my: 4, backgroundColor: "#f5f5f5", p: 3, borderRadius: 2 }}
          >
            <Typography variant="h5" gutterBottom sx={{ color: "#1976d2" }}>
              Sürdürülebilirliğe Bağlılığımız
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}
            >
              TimeSheet olarak gezegeni korumak için üzerimize düşeni yapmaya
              inanıyoruz. Sürdürülebilir iş uygulamalarına bağlıyız ve çevresel
              etkimizi azaltmanın yollarını sürekli olarak arıyoruz.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#555", maxWidth: "800px", mx: "auto" }}
            >
              Dijital iletişimi ve dokümantasyonu teşvik ederek kağıt
              kullanımını en aza indiriyoruz. Veri merkezlerimiz yenilenebilir
              enerji kaynaklarıyla çalışıyor ve karbon ayak izimizi azaltmak
              için sürekli çalışıyoruz.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default AboutPage;
