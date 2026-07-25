import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { CvData } from '@/types/cv';

const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Helvetica', fontSize: 9, lineHeight: 1.3 },
  header: { marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 12 },
  name: { fontSize: 20, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 4, paddingBottom: 6 },
  role: { fontSize: 10, color: '#666', marginBottom: 4 },
  contact: { flexDirection: 'row', flexWrap: 'wrap', gap: 6, fontSize: 9, color: '#444' },
  sectionTitle: { fontSize: 11, fontWeight: 'bold', marginTop: 10, marginBottom: 4, textTransform: 'uppercase', color: '#2c3e50' },
  blueHighlight: { color: '#2980b9', fontWeight: 'bold' },

  skillsGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 4 },
  skillChip: { width: '31%', fontSize: 9 },

  row: { flexDirection: 'row', gap: 16 },
  colLeft: { width: '65%' },
  colRight: { width: '35%' },

  expItem: { marginBottom: 8 },
  expTitle: { fontSize: 10, fontWeight: 'bold' },
  expCompany: { fontSize: 9, color: '#444', paddingTop: 2 },
  expDesc: { fontSize: 9, marginTop: 3, textAlign: 'justify' },

  extraSection: { marginTop: 8 },
  extraGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 2 },
  extraItem: { width: '50%', fontSize: 9, marginBottom: 2 },

  skillItem: { marginBottom: 2 },
});

export const CvPdfDocument = ({ data }: { data: CvData }) => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>{data.header.name}</Text>
        <Text style={styles.role}>{data.header.role}</Text>

        <View style={styles.contact}>
          <Text><Text style={styles.blueHighlight}>{data.labels.email}</Text>: {data.header.email}</Text>
          <Text><Text style={styles.blueHighlight}>{data.labels.phone}</Text>: {data.header.phone}</Text>
          <Text><Text style={styles.blueHighlight}>Portfolio</Text>: https://{data.header.portfolio}</Text>
          <Text><Text style={styles.blueHighlight}>LinkedIn</Text>: https://{data.header.linkedin}</Text>
          <Text><Text style={styles.blueHighlight}>GitHub</Text>: https://{data.header.github}</Text>
          <Text><Text style={styles.blueHighlight}>CNPJ</Text>: {data.header.cnpj}</Text>
        </View>
      </View>

      {/* HARD SKILLS */}
      <View>
        <Text style={styles.sectionTitle}>{data.labels.skills}</Text>
        <View style={styles.skillsGrid}>
          {data.skills.map((skill, i) => (
            <Text key={i} style={styles.skillChip}>• {skill}</Text>
          ))}
        </View>
      </View>

      {/* SUMMARY */}
      <View>
        <Text style={styles.sectionTitle}>{data.labels.summary}</Text>
        <Text style={{ textAlign: 'justify' }}>{data.summary}</Text>
      </View>

      <View style={styles.row}>
        {/* LEFT COLUMN: Experience */}
        <View style={styles.colLeft}>
          <Text style={styles.sectionTitle}>{data.labels.experience}</Text>
          {data.experience.map((job, i) => (
            <View key={i} style={styles.expItem}>
              <Text style={styles.expTitle}>{job.role}</Text>
              <Text style={styles.expCompany}>{job.company} | {job.period}</Text>
              <Text style={styles.expDesc}>{job.description}</Text>
            </View>
          ))}
        </View>

        {/* RIGHT COLUMN: Education, Languages */}
        <View style={styles.colRight}>
          <Text style={styles.sectionTitle}>{data.labels.education}</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.expItem}>
              <Text style={{ fontWeight: 'bold' }}>{edu.course}</Text>
              <Text>{edu.institution}</Text>
              <Text style={{ fontSize: 8, color: '#666' }}>{edu.period}</Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>{data.labels.languages}</Text>
          {data.languages.map((lang, i) => (
            <Text key={i} style={styles.skillItem}>{lang.name} ({lang.level})</Text>
          ))}
        </View>
      </View>

      {/* EXTRACURRICULAR - topics only */}
      <View style={styles.extraSection}>
        <Text style={styles.sectionTitle}>{data.labels.extra}</Text>
        <View style={styles.extraGrid}>
          {data.extra.map((item, i) => (
            <Text key={i} style={styles.extraItem}>• {item.title} ({item.period})</Text>
          ))}
        </View>
      </View>

    </Page>
  </Document>
);