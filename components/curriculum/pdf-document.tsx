import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { CvData } from '@/types/cv';

// Register a standard font, using Helvetica by default
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Helvetica', fontSize: 10, lineHeight: 1.4 },
  header: { marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 10 },
  role: { fontSize: 12, color: '#666', marginBottom: 5 },
  contact: { flexDirection: 'row', gap: 10, fontSize: 9, color: '#444' },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', marginTop: 15, marginBottom: 5, textTransform: 'uppercase', color: '#2c3e50' },
  
  // Grid layout for Skills
  row: { flexDirection: 'row', gap: 20 },
  colLeft: { width: '65%' },
  colRight: { width: '35%' },

  // Items
  expItem: { marginBottom: 10 },
  expTitle: { fontSize: 11, fontWeight: 'bold' },
  expCompany: { fontSize: 10, color: '#444' },
  expDesc: { fontSize: 10, marginTop: 2, textAlign: 'justify' },
  
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
          <Text>{data.header.email} | {data.header.phone} | {data.header.location}</Text>
        </View>
        <View style={styles.contact}>
          <Text>{data.header.portfolio}</Text>
          <Text>{data.header.linkedin}</Text>
          <Text>{data.header.github}</Text>
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

          <Text style={styles.sectionTitle}>{data.labels.extra}</Text>
          {data.extra.map((item, i) => (
            <View key={i} style={styles.expItem}>
              <Text style={styles.expTitle}>{item.title}</Text>
              <Text style={styles.expCompany}>{item.period}</Text>
              <Text style={styles.expDesc}>{item.description}</Text>
            </View>
          ))}
        </View>

        {/* RIGHT COLUMN: Skills, Education, Languages */}
        <View style={styles.colRight}>
          
          <Text style={styles.sectionTitle}>{data.labels.education}</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.expItem}>
              <Text style={{ fontWeight: 'bold' }}>{edu.course}</Text>
              <Text>{edu.institution}</Text>
              <Text style={{ fontSize: 9, color: '#666' }}>{edu.period}</Text>
            </View>
          ))}

          <Text style={styles.sectionTitle}>{data.labels.skills}</Text>
          {data.skills.map((skill, i) => (
            <Text key={i} style={styles.skillItem}>• {skill}</Text>
          ))}

          <Text style={styles.sectionTitle}>{data.labels.languages}</Text>
          {data.languages.map((lang, i) => (
            <Text key={i} style={styles.skillItem}>{lang.name} ({lang.level})</Text>
          ))}
        </View>
      </View>
    </Page>
  </Document>
);