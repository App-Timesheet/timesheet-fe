import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import Layout from "../../Layout";

const ServicesPage = () => {
  return (
    <Layout>
      <Container>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: "#1976d2", textAlign: "center" }}
          >
            Hizmetlerimiz
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              color: "#555",
              textAlign: "center",
              maxWidth: "800px",
              mx: "auto",
            }}
          >
            TimeSheet'te, proje yönetimi deneyiminizi sorunsuz ve verimli hale
            getirmek için kapsamlı bir hizmet yelpazesi sunuyoruz. Aşağıda
            sağladığımız hizmetlerin ayrıntılı bir özeti bulunmaktadır:
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                1. Zaman Takibi
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Zaman takip aracımız, saatlerinizi hassasiyetle ve kolaylıkla
                kaydetmenizi sağlar. Çalışmanızı gerçek zamanlı olarak takip
                edin, belirli görevlere saat atayın ve zamanınızın nereye
                gittiğinin genel bir görünümünü elde edin. Bu özellik,
                müşterilere fatura kesmek, çalışan verimliliğini yönetmek ve
                projelerin doğru ilerlemesini sağlamak için mükemmeldir.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                2. Proje Yönetimi
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Projelerinizi baştan sona yönetmek için sezgisel proje yönetim
                araçlarımızı kullanın. Görevler oluşturun, bunları ekip
                üyelerine atayın, son tarihleri belirleyin ve ilerlemeyi
                izleyin. Araçlarımız, her şeyin düzenli kalmasına ve
                ekibinizdeki herkesin aynı hizada olmasına yardımcı olacak
                şekilde tasarlanmıştır.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                3. Görev Atama
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Görevleri doğru ekip üyelerine kolayca atayın. Öncelikleri
                belirleyebilir, açıklamalar ekleyebilir ve görevlerin doğru ve
                zamanında tamamlanmasını sağlamak için gerekli tüm ayrıntıları
                sağlayabilirsiniz. Platformumuz, gerektiğinde görevleri yeniden
                atamayı basit hale getirerek esneklik ve verimlilik sağlar.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                4. Detaylı Raporlama
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Projeleriniz hakkında detaylı raporlama araçlarımızla içgörüler
                elde edin. Harcanan zaman, görev tamamlama ve proje ilerlemesi
                hakkında raporlar oluşturun. Bu raporlar, özel ihtiyaçlarınızı
                karşılayacak şekilde özelleştirilebilir ve size bilinçli
                kararlar vermeniz için değerli veriler sağlar.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, mb: 4, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                5. İş Birliği Araçları
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Ekip içinde iş birliğini, dahili iletişim araçlarımızla teşvik
                edin. Dosya paylaşın, görevlere yorum bırakın ve herkesin güncel
                kalmasını sağlayın. İş birliği özelliklerimiz, ekip iletişimini
                iyileştirmek ve iş akışını hızlandırmak için tasarlanmıştır.
              </Typography>
            </Paper>

            <Paper
              elevation={3}
              sx={{ p: 3, backgroundColor: "#e3f2fd", borderRadius: 2 }}
            >
              <Typography variant="h6" gutterBottom sx={{ color: "#1976d2" }}>
                6. Özel Entegrasyonlar
              </Typography>
              <Typography variant="body1" gutterBottom sx={{ color: "#555" }}>
                Her ekibin benzersiz ihtiyaçları olduğunu anlıyoruz. Bu nedenle,
                diğer araçlar ve platformlarla özel entegrasyonlar sunuyoruz.
                CRM'iniz, faturalama yazılımınız veya başka bir araçla bağlantı
                kurmanız gerekiyorsa, işiniz için sorunsuz entegrasyonlar
                kurmanıza yardımcı olabiliriz.
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default ServicesPage;
