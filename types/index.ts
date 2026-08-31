export type UserRole = 'CANDIDATE' | 'INSTITUTION' | 'EMPLOYER' | 'ADMIN';

export type EmploymentStatus = 'UNEMPLOYED' | 'EMPLOYED' | 'FREELANCE' | 'UNDEREMPLOYED';

export type CohortStatus = 'UPCOMING' | 'ACTIVE' | 'COMPLETED';

export type EnrollmentStatus = 'ENROLLED' | 'DROPOUT' | 'CERTIFIED' | 'PLACED';

export type TrackingInterval = 'DAY_30' | 'DAY_90' | 'DAY_180' | 'DAY_365';

export type VerificationStatus = 'PENDING' | 'VERIFIED' | 'FLAGGED' | 'REJECTED';

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  profileCompleted: boolean;
}

export interface SkillGapMetric {
  skillId: string;
  skillName: string;
  category: string;
  taxonomyCode: string;
  supplyAverage: number;    // 1-5 scale across trainees
  demandAverage: number;    // 1-5 scale from job postings
  gapScore: number;         // Demand - Supply (positive = deficit/high-priority, negative = surplus)
  status: 'CRITICAL_DEFICIT' | 'MODERATE_DEFICIT' | 'BALANCED' | 'SURPLUS';
  jobCount: number;
  candidateCount: number;
}

export interface CohortAnalytics {
  cohortId: string;
  cohortTitle: string;
  institutionName: string;
  enrolledCount: number;
  certifiedCount: number;
  placedCount: number;
  retention6MonthCount: number;
  retention12MonthCount: number;
  completionRate: number;   // %
  placementRate: number;    // %
  retentionRate6Mo: number; // %
  retentionRate12Mo: number;// %
  preAvgWage: number;
  postAvgWage: number;
  wageDeltaPercent: number;
  costPerTrainee: number;
  roiMultiplier: number;    // Annual wage increase generated vs cost
  avgTimeToPlacementDays: number;
}

export interface LongitudinalMilestone {
  interval: TrackingInterval;
  title: string;
  days: number;
  dueDate: string;
  status: 'PENDING' | 'LOGGED' | 'VERIFIED' | 'OVERDUE';
  outcome?: {
    id: string;
    company: string;
    jobTitle: string;
    salary: number;
    employmentType: string;
    promotionReceived: boolean;
    verificationStatus: VerificationStatus;
    loggedAt: string;
  };
}
