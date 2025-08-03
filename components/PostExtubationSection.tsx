
import React from 'react';
import { ShieldCheck, Users, AlertTriangle, Wind, CheckCircle, TrendingUp, XCircle } from './icons';
import { Accordion } from './Accordion';

const KeyPointsCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg shadow-sm">
        <h3 className="font-bold text-lg text-indigo-800 flex items-center mb-3">
            <ShieldCheck className="w-6 h-6 mr-2" />
            Éléments Clés à Retenir
        </h3>
        <ul className="list-disc list-inside space-y-2 text-slate-700 text-base">
            {children}
        </ul>
    </div>
);

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'red' | 'amber' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        red: 'border-red-500 bg-red-50 text-red-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800'
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} h-full shadow-sm`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base">{children}</div>
        </div>
    );
};

export const PostExtubationSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <ShieldCheck className="w-8 h-8 mr-4 text-indigo-600" />
                VNI en Post-Extubation
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                L'utilisation de la VNI pour prévenir l'échec d'extubation est une stratégie efficace, mais uniquement chez les patients à haut risque.
            </p>
        </div>

        <KeyPointsCard>
            <li>La VNI est recommandée en <strong>Recommandation Forte</strong> pour <strong>prévenir</strong> l'IRA post-extubation chez les patients à haut risque.</li>
            <li>La VNI ne doit <strong>PAS</strong> être utilisée pour <strong>traiter</strong> une IRA post-extubation déjà installée (échec d'extubation avéré). Dans ce cas, la réintubation ne doit pas être retardée.</li>
            <li>L'Oxygénothérapie à Haut Débit (OHD/HFNC) est une alternative efficace et souvent mieux tolérée.</li>
            <li>L'initiation doit être immédiate après l'extubation.</li>
        </KeyPointsCard>

        <Accordion title="Recommandation Forte (CHEST/ATS 2017)" icon={<ShieldCheck className="w-6 h-6"/>} variant="primary">
            <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg shadow-sm">
                <h4 className="font-bold text-lg text-green-800">Recommandation Forte</h4>
                <p className="mt-2 text-slate-700">
                    "Pour les patients à haut risque d'échec d'extubation, ventilés depuis plus de 24h et ayant réussi une épreuve de sevrage, nous recommandons l'extubation vers une VNI préventive." (Qualité de preuve modérée)
                </p>
                <p className="text-xs text-slate-500 italic mt-2">
                    Ouellette et al., CHEST/ATS Guideline, 2017
                </p>
            </div>
            <div className="mt-4">
                <h4 className="font-semibold text-slate-800 mb-2">Points Clés de la Recommandation :</h4>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                    <li><strong>Population Cible :</strong> Patients à haut risque (hypercapnie, BPCO, insuffisance cardiaque, autres comorbidités sérieuses).</li>
                    <li><strong>Timing :</strong> La VNI doit être appliquée <strong>immédiatement</strong> après l'extubation pour être efficace.</li>
                    <li><strong>Bénéfices Attendus :</strong> La VNI préventive dans ce groupe réduit la mortalité en soins intensifs et le taux de réintubation.</li>
                </ul>
            </div>
        </Accordion>

        <Accordion title="Identifier les Patients à Haut Risque d'Échec" icon={<Users className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La clé est de sélectionner les bons candidats. Un patient à haut risque présente au moins un des critères suivants :</p>
            <InfoCard title="Critères de Haut Risque" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                <ul className="list-disc list-inside space-y-1">
                    <li>Âge &gt; 65 ans.</li>
                    <li>Insuffisance cardiaque sous-jacente.</li>
                    <li>Pathologie respiratoire chronique (BPCO, etc.).</li>
                    <li>Score APACHE II &gt; 12 au moment de l'extubation.</li>
                    <li>Échec d'une première épreuve de sevrage.</li>
                    <li>Toux inefficace, sécrétions abondantes.</li>
                    <li>Hypercapnie persistante après l'épreuve de sevrage.</li>
                </ul>
            </InfoCard>
        </Accordion>

        <Accordion title="VNI Préventive vs. OHD : Que choisir ?" icon={<Wind className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">Chez les patients à haut risque, la VNI et l'OHD ont toutes deux montré leur supériorité par rapport à l'oxygénothérapie standard pour réduire le taux de réintubation.</p>
             <div className="grid md:grid-cols-2 gap-6">
                 <InfoCard title="VNI (Bi-level)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p className="font-semibold">Bénéfices :</p>
                    <ul className="list-disc list-inside mt-1">
                        <li>Réduit le taux de réintubation.</li>
                        <li>Réduit la mortalité en USI.</li>
                        <li>Support ventilatoire actif, utile en cas d'hypercapnie.</li>
                    </ul>
                </InfoCard>
                 <InfoCard title="OHD (HFNC)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p className="font-semibold">Bénéfices :</p>
                    <ul className="list-disc list-inside mt-1">
                        <li>Réduit le taux de réintubation (non-inférieur à la VNI).</li>
                        <li>Mieux tolérée, plus confortable.</li>
                        <li>Permet de parler et de manger plus facilement.</li>
                    </ul>
                </InfoCard>
             </div>
             <p className="text-center mt-4 font-semibold text-slate-700">Le choix dépend de l'expertise locale, de la tolérance du patient et de la présence d'une hypercapnie.</p>
        </Accordion>

         <Accordion title="Le Piège à Éviter : Le Traitement de l'Échec Avéré" icon={<XCircle className="w-6 h-6"/>} variant="danger">
            <InfoCard title="Recommandation Forte CONTRE la VNI" icon={<XCircle className="w-5 h-5"/>} variant="red">
                <p>Si un patient développe une IRA après avoir été extubé, l'utilisation de la VNI comme "traitement de sauvetage" est <strong>fortement déconseillée</strong>.</p>
                <p className="mt-2">Les études montrent que cette stratégie <strong>augmente la mortalité</strong> en retardant la réintubation, qui est inévitable. La réintubation doit être précoce.</p>
            </InfoCard>
        </Accordion>
    </div>
);