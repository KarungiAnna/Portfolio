'use client';

import { useState, useTransition } from 'react';
import SummaryForm from './SummaryForm';
import EducationForm from './EducationForm';
import SkillForm from './SkillForm';
import StrengthForm from './StrengthForm';
import CertificationForm from './CertificationForm';
import RefereeForm from './RefereeForm';
import ExperienceForm from './ExperienceForm';
import {
  deleteEducation,
  deleteSkill,
  deleteStrength,
  deleteCertification,
  deleteReferee,
} from '@/app/actions/cv-sections';
import { deleteExperience } from '@/app/actions/experiences';

type Summary = { id: number; content: string } | null;
type Education = { id: number; degree: string; institution: string; year: string; description: string | null; order: number | null }[];
type Skills = { id: number; name: string; category: string | null; order: number | null }[];
type Strengths = { id: number; title: string; proof: string; order: number | null }[];
type Certifications = { id: number; name: string; issuer: string; year: string; url: string | null; order: number | null }[];
type Referees = { id: number; name: string; title: string; company: string; email: string; phone: string | null; order: number | null }[];
type Experiences = { id: number; role: string; duration: string; companyName: string; companyDescription: string; companyUrl: string | null; bullets: string[]; order: number | null }[];

type Props = {
  summary: Summary;
  education: Education;
  skills: Skills;
  strengths: Strengths;
  certifications: Certifications;
  referees: Referees;
  experiences: Experiences;
};

const TABS = [
  { key: 'summary', label: 'Summary' },
  { key: 'experience', label: 'Experience' },
  { key: 'education', label: 'Education' },
  { key: 'skills', label: 'Skills' },
  { key: 'strengths', label: 'Strengths' },
  { key: 'certifications', label: 'Certifications' },
  { key: 'referees', label: 'Referees' },
] as const;

type TabKey = typeof TABS[number]['key'];

function DeleteBtn({ onDelete }: { onDelete: () => Promise<{ success: boolean; error?: string }> }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() => startTransition(async () => { await onDelete(); })}
      disabled={isPending}
      style={{ background: 'var(--wine)', color: 'var(--cream)', border: 'none', padding: '0.4rem 0.8rem', fontSize: '0.6rem', cursor: 'pointer', fontFamily: 'var(--ff-label)', textTransform: 'uppercase', opacity: isPending ? 0.6 : 1 }}
    >
      {isPending ? '...' : 'Delete'}
    </button>
  );
}

const cardStyle = { background: 'var(--cream-2)', padding: '1.5rem', border: '1px solid var(--border)' };
const rowStyle: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' };
const mutedSmall = { fontSize: '0.78rem', color: 'var(--muted)', margin: '0.2rem 0 0' };

export default function CVAdminTabs({ summary, education, skills, strengths, certifications, referees, experiences }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('summary');

  const tabBtn = (key: TabKey, label: string) => (
    <button
      key={key}
      onClick={() => setActiveTab(key)}
      style={{
        padding: '0.5rem 1rem',
        fontFamily: 'var(--ff-label)',
        fontSize: '0.58rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        border: '1px solid var(--border)',
        background: activeTab === key ? 'var(--green)' : 'transparent',
        color: activeTab === key ? 'var(--cream)' : 'var(--muted)',
        cursor: 'pointer',
      }}
    >
      {label}
    </button>
  );

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {TABS.map(t => tabBtn(t.key, t.label))}
      </div>

      {/* ── Summary ── */}
      {activeTab === 'summary' && (
        <div style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Professional Summary</h2>
          <SummaryForm initialContent={summary?.content} />
        </div>
      )}

      {/* ── Experience ── */}
      {activeTab === 'experience' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Experiences</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {experiences.map(exp => (
                <div key={exp.id} style={cardStyle}>
                  <div style={rowStyle}>
                    <div>
                      <h3 style={{ fontSize: '1rem', margin: '0 0 0.2rem', fontFamily: 'var(--ff-display)' }}>{exp.role}</h3>
                      <p style={mutedSmall}>{exp.companyName} · {exp.duration}</p>
                      <ul style={{ paddingLeft: '1rem', fontSize: '0.78rem', color: 'var(--ink)', marginTop: '0.8rem' }}>
                        {exp.bullets.map((b, i) => <li key={i} style={{ marginBottom: '0.25rem' }}>{b}</li>)}
                      </ul>
                    </div>
                    <DeleteBtn onDelete={() => deleteExperience(exp.id)} />
                  </div>
                </div>
              ))}
              {experiences.length === 0 && <p style={{ color: 'var(--muted)' }}>No experiences yet.</p>}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add Experience</h2>
            <ExperienceForm />
          </div>
        </div>
      )}

      {/* ── Education ── */}
      {activeTab === 'education' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Education</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {education.map(edu => (
                <div key={edu.id} style={cardStyle}>
                  <div style={rowStyle}>
                    <div>
                      <h3 style={{ fontSize: '1rem', margin: '0 0 0.2rem', fontFamily: 'var(--ff-display)' }}>{edu.degree}</h3>
                      <p style={mutedSmall}>{edu.institution} · {edu.year}</p>
                      {edu.description && <p style={{ fontSize: '0.78rem', color: 'var(--ink)', marginTop: '0.5rem' }}>{edu.description}</p>}
                    </div>
                    <DeleteBtn onDelete={() => deleteEducation(edu.id)} />
                  </div>
                </div>
              ))}
              {education.length === 0 && <p style={{ color: 'var(--muted)' }}>No education entries yet.</p>}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add Education</h2>
            <EducationForm />
          </div>
        </div>
      )}

      {/* ── Skills ── */}
      {activeTab === 'skills' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Skills</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {skills.map(skill => (
                <div key={skill.id} style={cardStyle}>
                  <div style={rowStyle}>
                    <div>
                      <span style={{ fontSize: '0.9rem', fontFamily: 'var(--ff-body)' }}>{skill.name}</span>
                      {skill.category && <span style={{ ...mutedSmall, display: 'inline', marginLeft: '0.5rem' }}>— {skill.category}</span>}
                    </div>
                    <DeleteBtn onDelete={() => deleteSkill(skill.id)} />
                  </div>
                </div>
              ))}
              {skills.length === 0 && <p style={{ color: 'var(--muted)' }}>No skills yet.</p>}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add Skill</h2>
            <SkillForm />
          </div>
        </div>
      )}

      {/* ── Strengths ── */}
      {activeTab === 'strengths' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Strengths</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {strengths.map(s => (
                <div key={s.id} style={cardStyle}>
                  <div style={rowStyle}>
                    <div>
                      <h3 style={{ fontSize: '1rem', margin: '0 0 0.3rem', fontFamily: 'var(--ff-display)' }}>{s.title}</h3>
                      <p style={{ fontSize: '0.78rem', color: 'var(--muted)', fontStyle: 'italic' }}>{s.proof}</p>
                    </div>
                    <DeleteBtn onDelete={() => deleteStrength(s.id)} />
                  </div>
                </div>
              ))}
              {strengths.length === 0 && <p style={{ color: 'var(--muted)' }}>No strengths yet.</p>}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add Strength</h2>
            <StrengthForm />
          </div>
        </div>
      )}

      {/* ── Certifications ── */}
      {activeTab === 'certifications' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Certifications</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map(cert => (
                <div key={cert.id} style={cardStyle}>
                  <div style={rowStyle}>
                    <div>
                      <h3 style={{ fontSize: '1rem', margin: '0 0 0.2rem', fontFamily: 'var(--ff-display)' }}>{cert.name}</h3>
                      <p style={mutedSmall}>{cert.issuer} · {cert.year}</p>
                      {cert.url && <a href={cert.url} target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: 'var(--green)', marginTop: '0.3rem', display: 'block' }}>View certificate ↗</a>}
                    </div>
                    <DeleteBtn onDelete={() => deleteCertification(cert.id)} />
                  </div>
                </div>
              ))}
              {certifications.length === 0 && <p style={{ color: 'var(--muted)' }}>No certifications yet.</p>}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add Certification</h2>
            <CertificationForm />
          </div>
        </div>
      )}

      {/* ── Referees ── */}
      {activeTab === 'referees' && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '3rem', alignItems: 'start' }}>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Existing Referees</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {referees.map(ref => (
                <div key={ref.id} style={cardStyle}>
                  <div style={rowStyle}>
                    <div>
                      <h3 style={{ fontSize: '1rem', margin: '0 0 0.2rem', fontFamily: 'var(--ff-display)' }}>{ref.name}</h3>
                      <p style={mutedSmall}>{ref.title} · {ref.company}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--ink)', marginTop: '0.4rem' }}>{ref.email}{ref.phone ? ` · ${ref.phone}` : ''}</p>
                    </div>
                    <DeleteBtn onDelete={() => deleteReferee(ref.id)} />
                  </div>
                </div>
              ))}
              {referees.length === 0 && <p style={{ color: 'var(--muted)' }}>No referees yet.</p>}
            </div>
          </div>
          <div>
            <h2 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontFamily: 'var(--ff-display)' }}>Add Referee</h2>
            <RefereeForm />
          </div>
        </div>
      )}
    </div>
  );
}
