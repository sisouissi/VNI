
import React from 'react';
import { ListChecks, AlertTriangle, CheckCircle, XCircle, Wrench } from './icons';
import { Accordion } from './Accordion';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ListChecks className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' | 'red' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
        red: 'border-red-500 bg-red-50 text-red-800'
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} h-full shadow-sm`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-sm">{children}</div>
        </div>
    );
};

export const PedGeneralitesSection: React.FC = () => {
  return (
    <div className="space-y-6 pt-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900">Introduction et Principes Fondamentaux</h3>
        <p className="mt-2 text-slate-600 text-base">
            La VNI en pédiatrie est en pleine expansion, mais manque de critères validés. L'approche doit être multidisciplinaire et centrée sur la qualité de vie.
        </p>
    </div>
    
    <KeyPointsCard>
        <li><strong>En aigu :</strong> La VNI est utilisée pour l'insuffisance respiratoire aiguë afin d'éviter l'intubation. Les indications principales incluent la bronchiolite, l'asthme, la pneumonie et le SDRA.</li>
        <li><strong>En chronique (long cours) :</strong> La VNI est indiquée en cas d'hypoventilation alvéolaire nocturne. Les indications principales sont les maladies neuromusculaires, les déformations thoraciques sévères et les SAOS complexes.</li>
        <li><strong>CPAP vs VNI :</strong> La CPAP vise à maintenir les voies aériennes ouvertes (SAOS). La VNI (Bi-level) assiste activement la respiration (hypoventilation).</li>
        <li><strong>Sécurité avant tout :</strong> La sélection du patient et de l'interface est cruciale. Une surveillance étroite est nécessaire pour prévenir les complications et reconnaître les signes d'échec.</li>
    </KeyPointsCard>
    
    <Accordion title="Indications pour la CPAP" icon={<CheckCircle className="w-6 h-6"/>} variant="primary">
        <p className="text-slate-700 mb-4 text-base">La CPAP est principalement indiquée pour les obstructions des voies aériennes supérieures.</p>
        <InfoCard title="Indications Clés de la CPAP" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
            <ul className="list-disc list-inside space-y-1">
                <li><strong>SAOS "Complexe" sévère et persistant :</strong> Après échec de l'adéno-amygdalectomie, ou en cas de malformations craniofaciales, obésité morbide, ou maladies osseuses (achondroplasie).</li>
                <li><strong>PEEP intrinsèque élevée :</strong> Comme observée chez les nourrissons avec dysplasie bronchopulmonaire (DBP).</li>
            </ul>
        </InfoCard>
    </Accordion>

    <Accordion title="Indications pour la VNI (Bi-level)" icon={<CheckCircle className="w-6 h-6"/>} variant="primary">
        <p className="text-slate-700 mb-4 text-base">La VNI est indiquée pour l'hypoventilation alvéolaire nocturne.</p>
        <div className="grid md:grid-cols-2 gap-4">
            <InfoCard title="Maladies Neuromusculaires (MNM)" icon={<Wrench className="w-5 h-5"/>} variant="blue">
                <p>C'est l'indication la plus fréquente. Exemples : Amyotrophie Spinale (SMA), Dystrophie Musculaire de Duchenne (DMD).</p>
            </InfoCard>
            <InfoCard title="Autres Indications" icon={<Wrench className="w-5 h-5"/>} variant="blue">
                <ul className="list-disc list-inside space-y-1">
                    <li>Déformations thoraciques sévères.</li>
                    <li>Maladies de surcharge (mucopolysaccharidose).</li>
                    <li>Syndromes avec hypoventilation centrale (Prader-Willi, ROHHAD).</li>
                    <li>Mucoviscidose.</li>
                    <li>Échec ou intolérance à la CPAP dans le SAOS.</li>
                </ul>
            </InfoCard>
        </div>
    </Accordion>
    
    <Accordion title="Contre-indications & Critères d'Inéligibilité" icon={<XCircle className="w-6 h-6"/>} variant="danger">
        <p className="text-slate-700 mb-4 text-base">La décision d'initier une VNI doit prendre en compte les situations où elle pourrait être inefficace ou dangereuse.</p>
        <div className="grid md:grid-cols-2 gap-6">
            <InfoCard title="Contre-indications Absolues (en aigu)" icon={<XCircle className="w-5 h-5"/>} variant="red">
                <ul className="list-disc list-inside space-y-1">
                    <li>Arrêt cardio-respiratoire.</li>
                    <li>Instabilité hémodynamique sévère.</li>
                    <li>Altération profonde de la conscience (GCS &lt; 8).</li>
                    <li>Risque d'inhalation élevé (vomissements, absence de réflexes de protection).</li>
                    <li>Traumatisme facial majeur.</li>
                </ul>
            </InfoCard>
            <InfoCard title="Critères d'Inéligibilité (en chronique)" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                <ul className="list-disc list-inside space-y-1">
                    <li>Incapacité à protéger les voies aériennes (atteinte bulbaire sévère).</li>
                    <li>Sécrétions abondantes et incontrôlables.</li>
                    <li>Manque de coopération du patient ou de la famille.</li>
                    <li>Anomalies faciales incompatibles avec une interface.</li>
                </ul>
            </InfoCard>
        </div>
    </Accordion>
    </div>
  );
};
