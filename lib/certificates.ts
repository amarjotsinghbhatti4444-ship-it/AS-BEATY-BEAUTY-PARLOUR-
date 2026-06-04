export interface Certificate {
  id: string;
  studentName: string;
  phoneNumber: string;
  course: string;
  certNumber: string;
  date: string;
}

export const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: '1',
    studentName: 'Jane Doe',
    phoneNumber: '1234567890',
    course: 'Advanced Hair Styling',
    certNumber: 'ASB-2026-001',
    date: '2026-05-20'
  }
];

export const getCertificatesFromStorage = (): Certificate[] => {
  if (typeof window === 'undefined') return DEFAULT_CERTIFICATES;
  const stored = localStorage.getItem('asbeauty_certs');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return DEFAULT_CERTIFICATES;
    }
  }
  return DEFAULT_CERTIFICATES;
};

export const saveCertificatesToStorage = (certs: Certificate[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('asbeauty_certs', JSON.stringify(certs));
};
