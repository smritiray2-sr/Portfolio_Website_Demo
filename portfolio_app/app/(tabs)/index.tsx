import { useRef } from 'react';
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';

interface HeroSectionProps {
  onViewWorkPress: () => void;
}

function HeroSection({ onViewWorkPress }: HeroSectionProps) {
  return (
    <View style={styles.hero}>
      <Text style={styles.name}>Smriti Ray</Text>
      <Text style={styles.role}>Aspiring Data Analyst</Text>
      <Text style={styles.tagline}>
        Turning data into clear, actionable insights.
      </Text>
      
      <Pressable 
        style={({ pressed }) => [
          styles.ctaButton,
          pressed && styles.ctaButtonPressed,
        ]}
        onPress={onViewWorkPress}
      >
        <Text style={styles.ctaText}>View My Work</Text>
      </Pressable>
    </View>
  );
}

function AboutSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.text}>
        I'm learning to be a data analyst by working through real problems. I find it exciting when data reveals something useful or interesting—and I focus on making sure my analysis is clear and honest rather than just impressive-looking. I'm still growing, but I'm committed to doing thoughtful work.
      </Text>
    </View>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
}

function ProjectCard({ title, description, tech }: ProjectCardProps) {
  return (
    <View style={styles.projectCard}>
      <Text style={styles.projectTitle}>{title}</Text>
      <Text style={styles.projectDescription}>{description}</Text>
      <Text style={styles.projectTech}>{tech}</Text>
    </View>
  );
}

interface ProjectData {
  id: number;
  title: string;
  description: string;
  tech: string;
}

interface ProjectsSectionProps {
  projects: ProjectData[];
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Projects</Text>
      <Text style={styles.text}>
        This portfolio shows projects I've completed through coursework and personal practice. I work with Excel, SQL, and Python to clean data and find insights. Each project taught me something new about how to approach a problem thoughtfully.
      </Text>
      
      <View style={styles.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
          />
        ))}
      </View>
    </View>
  );
}

function ContactSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Get in Touch</Text>
      <Text style={styles.text}>Email: smritiray2.sr@gmail.com</Text>
      <Text style={styles.text}>GitHub: github.com/smritiray2-sr</Text>
    </View>
  );
}

export default function HomeScreen() {
  const scrollViewRef = useRef<ScrollView>(null);

  // Project data for portfolio
  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'Sales Performance Analysis',
      description: 'Analyzed quarterly sales data to identify trends and top-performing regions. Cleaned and visualized data to support business decisions.',
      tech: 'Excel, SQL, Tableau',
    },
    {
      id: 2,
      title: 'Customer Segmentation Study',
      description: 'Used Python to segment customers based on purchase behavior and demographics. Created visualizations to guide marketing strategy.',
      tech: 'Python, Pandas, Matplotlib',
    },
    {
      id: 3,
      title: 'Inventory Data Cleanup Project',
      description: 'Identified and fixed data quality issues in a product inventory dataset. Documented processes for ongoing data maintenance.',
      tech: 'Excel, Python, SQL',
    },
  ];

  const handleViewWork = () => {
    scrollViewRef.current?.scrollTo({ y: 450, animated: true });
  };

  return (
    <ScrollView ref={scrollViewRef} style={styles.container} contentContainerStyle={styles.content}>
      <HeroSection onViewWorkPress={handleViewWork} />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFBFC',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 60,
  },

  hero: {
    marginBottom: 72,
  },
  name: {
    fontSize: 44,
    fontWeight: '700',
    color: '#0F172A',
    letterSpacing: -0.8,
    lineHeight: 52,
    marginBottom: 8,
  },
  role: {
    fontSize: 22,
    fontWeight: '600',
    color: '#475569',
    lineHeight: 32,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 17,
    fontWeight: '400',
    color: '#64748B',
    lineHeight: 26,
    maxWidth: 360,
    marginBottom: 32,
  },
  ctaButton: {
    marginTop: 8,
    paddingVertical: 12,
    paddingHorizontal: 28,
    backgroundColor: '#E0E7FF',
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  ctaButtonPressed: {
    backgroundColor: '#C7D2FE',
  },
  ctaText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#3730A3',
    lineHeight: 20,
  },

  // ===== SECTION LAYOUT =====
  section: {
    marginBottom: 64,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 16,
    lineHeight: 36,
  },
  text: {
    fontSize: 16,
    fontWeight: '400',
    color: '#334155',
    lineHeight: 28,
    marginBottom: 0,
  },

  projectsContainer: {
    marginTop: 28,
    gap: 16,
  },
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#4F46E5',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 12,
    lineHeight: 26,
  },
  projectDescription: {
    fontSize: 15,
    fontWeight: '400',
    color: '#475569',
    lineHeight: 25,
    marginBottom: 14,
  },
  projectTech: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4F46E5',
    backgroundColor: '#EEF2FF',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
});