import { useRef } from 'react';
import { ScrollView, Text, View, StyleSheet, Pressable } from 'react-native';

/**
 * PORTFOLIO SCREEN – SMRITI RAY
 * 
 * ✅ EXPO COMPATIBILITY VERIFIED
 * This component uses only React Native APIs that are fully supported by Expo.
 * No native modules or unsupported libraries are required.
 * 
 * 🔧 IMPORT FIX – React Hooks vs React Native Components:
 * React hooks (useRef, useEffect, useState, etc.) MUST be imported from 'react'
 * React Native components (ScrollView, Text, View, etc.) come from 'react-native'
 * On Expo Web, importing hooks from 'react-native' causes "(0, _reactNativeWebDistIndex.useRef) is not a function" error
 * This separation ensures compatibility across all platforms (iOS, Android, Web)
 * 
 * SUPPORTED COMPONENTS USED:
 * - ScrollView: Native scrolling container (Expo built-in)
 * - Text: Cross-platform text rendering (Expo built-in)
 * - View: Layout container (Expo built-in)
 * - StyleSheet: Performance-optimized styles (Expo built-in)
 * - Pressable: Touch interaction handler (Expo built-in)
 * - useRef: React hook for scroll reference (React built-in)
 * 
 * DEPENDENCIES USED:
 * - react-native: Included in Expo SDK
 * - expo-router: For navigation (already in package.json)
 * - No custom native modules
 * 
 * HOW TO RUN WITH EXPO GO (Beginner Guide):
 * 
 * 1. Prerequisites:
 *    - Node.js installed (v18+)
 *    - Expo CLI: npm install -g expo-cli
 *    - Expo Go app on your phone (iOS App Store or Google Play)
 * 
 * 2. Start development server:
 *    $ npx expo start
 *    This launches the Expo development server on your computer
 * 
 * 3. Connect your phone:
 *    Option A - Scan QR code:
 *      • Open Expo Go app on your phone
 *      • Scan the QR code shown in terminal
 *      • App loads automatically on your device
 * 
 *    Option B - Run on simulator/emulator:
 *      • Press 'i' in terminal for iOS Simulator
 *      • Press 'a' in terminal for Android Emulator
 *      • App loads automatically in emulator
 * 
 * 4. Live reload:
 *    • Save changes to this file
 *    • App updates automatically on your device
 *    • No rebuild required!
 * 
 * 5. Troubleshooting:
 *    • QR code not scanning? Check both devices on same WiFi network
 *    • Port 8081 in use? Run: npx expo start --clear
 *    • Still having issues? Run: npm install && npx expo start
 * 
 * For more info: https://docs.expo.dev/get-started/introduction/
 */

/**
 * Component-Based Architecture Benefits:
 * - Reusability: Components can be used in multiple places with different props
 * - Maintainability: Changes to a component's design/behavior happen in one place
 * - Scalability: Easy to add new sections or features without touching the main screen
 * - Testability: Individual components can be tested in isolation
 * - Readability: The main HomeScreen component is clean and easy to understand
 * - Team collaboration: Multiple developers can work on different components simultaneously
 */

// ============================================================================
// HERO SECTION COMPONENT
// ============================================================================
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
      
      {/* CTA Button: Guides user to next action (Projects)
          Improves UX by reducing friction—users don't have to scroll to find work
          Subtle design keeps focus on the intro while offering a clear next step */}
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

// ============================================================================
// ABOUT SECTION COMPONENT
// ============================================================================
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

// ============================================================================
// PROJECT CARD COMPONENT
// ============================================================================
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

// ============================================================================
// PROJECTS SECTION COMPONENT
// ============================================================================
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
      
      {/* Project Cards – Component composition keeps code DRY
          Each card is rendered by the reusable ProjectCard component
          Consistent styling and structure across all projects */}
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

// ============================================================================
// CONTACT SECTION COMPONENT
// ============================================================================
function ContactSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Get in Touch</Text>
      <Text style={styles.text}>Email: smritiray2.sr@gmail.com</Text>
      <Text style={styles.text}>GitHub: github.com/smritiray2-sr</Text>
    </View>
  );
}

/**
 * PRODUCTION DEPLOYMENT OPTIONS:
 * 
 * This app can be deployed to:
 * 1. Expo Go – Already works! Scan QR code after npx expo start
 * 2. Expo Application Services (EAS) – Managed build service
 *    $ eas build --platform ios --platform android
 * 3. Apple App Store – Via EAS Submit
 *    $ eas submit --platform ios
 * 4. Google Play Store – Via EAS Submit
 *    $ eas submit --platform android
 * 5. Web – Already included!
 *    $ npx expo start --web
 * 
 * No custom native code needed. This is pure React Native.
 */

// ============================================================================
// MAIN SCREEN COMPONENT
// ============================================================================
export default function HomeScreen() {
  // TypeScript Fix: Explicitly type the ScrollView ref
  // Without type annotation, TypeScript infers 'null' and prevents calling scrollTo()
  // By specifying ScrollView type, TypeScript knows about the scrollTo() method
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

  // Scroll to Projects section on button press
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

// ============================================================================
// STYLES
// ============================================================================
// Spacing system: 8px base unit for consistent rhythm
// Color palette: Professional, calm, recruiter-friendly
// Typography: Clear hierarchy with intentional font weights and sizes
const styles = StyleSheet.create({
  // ===== CONTAINER & LAYOUT =====
  container: {
    backgroundColor: '#FAFBFC',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 60,
  },

  // ===== HERO SECTION =====
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

  // ===== PROJECT CARDS =====
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