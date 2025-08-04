

import React from 'react';
import { Heart, ListChecks, Wind, CheckCircle, SlidersHorizontal, AlertTriangle, Lungs, Wrench } from './icons';
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

const InfoCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode; variant: 'blue' | 'green' | 'amber' }> = ({ title, children, icon, variant }) => {
    const colors = {
        blue: 'border-blue-500 bg-blue-50 text-blue-800',
        green: 'border-green-500 bg-green-50 text-green-800',
        amber: 'border-amber-500 bg-amber-50 text-amber-800',
    };
    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]} shadow-sm overflow-hidden`}>
            <h4 className="font-semibold text-lg flex items-center mb-2">
                {icon}
                <span className="ml-3">{title}</span>
            </h4>
            <div className="text-slate-700 space-y-2 text-base break-words">{children}</div>
        </div>
    );
};

export const OapSection: React.FC = () => (
    <div className="space-y-8 animate-fade-in">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 flex items-center">
                <Heart className="w-8 h-8 mr-4 text-indigo-600" />
                Œdème Aigu du Poumon (OAP) Cardiogénique
            </h2>
            <p className="mt-2 text-slate-600 text-base">
                La VNI, et en particulier la CPAP, est une intervention de première ligne qui a transformé le pronostic de l'OAP.
            </p>
        </div>

        <KeyPointsCard>
            <li>La <strong>CPAP est le traitement de référence</strong> et de première intention pour l'OAP (Recommandation Classe IIa, Niveau A).</li>
            <li>Le bénéfice principal est hémodynamique : <strong>réduction de la pré-charge et de la post-charge</strong> du ventricule gauche.</li>
            <li>La VNI (Bi-level) est une <strong>alternative aussi efficace</strong> que la CPAP, surtout en cas d'hypercapnie associée, mais n'a pas montré de supériorité claire.</li>
            <li>Il n'y a <strong>pas de sur-risque démontré d'infarctus du myocarde</strong> avec la VNI par rapport à la CPAP.</li>
        </KeyPointsCard>

        <Accordion title="Physiopathologie et Bénéfices de la Pression Positive" icon={<Wind className="w-6 h-6"/>} variant="primary">
            <p className="text-slate-700 mb-4 text-base">La pression positive intrathoracique (PPI) a des effets bénéfiques majeurs sur la mécanique cardiaque et pulmonaire dans l'OAP.</p>
            <div className="grid md:grid-cols-2 gap-6">
                <InfoCard title="Effets Pulmonaires" icon={<Lungs className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside">
                        <li><strong>Recrutement alvéolaire :</strong> La pression positive ouvre les alvéoles inondées, augmentant la capacité résiduelle fonctionnelle (CRF) et la surface d'échange gazeux.</li>
                        <li><strong>Amélioration de la compliance :</strong> Réduit la rigidité pulmonaire.</li>
                        <li><strong>Diminution du travail respiratoire :</strong> Soulage les muscles respiratoires fatigués.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Effets Cardiovasculaires (Clés)" icon={<Heart className="w-5 h-5"/>} variant="green">
                    <p>La PPI réduit la pression transmurale du ventricule gauche (VG), ce qui est crucial.</p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Diminution de la pré-charge :</strong> La PPI réduit le retour veineux vers le cœur.</li>
                        <li><strong>Diminution de la post-charge VG :</strong> Effet le plus important. En réduisant les variations négatives de pression intrathoracique, la PPI diminue la pression transmurale du VG, ce qui facilite l'éjection systolique et réduit la congestion pulmonaire.</li>
                    </ul>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="Le Débat Historique : Risque d'Infarctus du Myocarde" icon={<AlertTriangle className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">
                Pendant des années, un sur-risque d'infarctus du myocarde (IDM) a été suspecté avec la VNI (Bi-level/nIPSV) par rapport à la CPAP, créant une controverse majeure. Cette section retrace l'historique de ce débat, de sa naissance à sa résolution finale (Ferrari et al., 2010).
            </p>
            <div className="space-y-4">
                 <InfoCard title="L'Origine de la Controverse" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <div className="space-y-3 text-sm">
                        <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                            <h5 className="font-semibold text-slate-700">Étape 1 : L'Alerte Initiale (Mehta et al., 1997)</h5>
                            <p className="mt-1 text-slate-600">Une étude est interrompue prématurément, suggérant un sur-risque d'infarctus avec la VNI.</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded-lg border border-red-300 shadow-sm">
                            <h5 className="font-semibold text-red-800">Étape 2 : La Faille Critique Révélée</h5>
                            <p className="mt-1 text-slate-600">Une analyse plus fine montre un <strong>biais de sélection majeur</strong> : 71% des patients du groupe VNI avaient déjà une douleur thoracique à l'inclusion (vs 31% en CPAP), faussant la conclusion.</p>
                        </div>
                        <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
                            <h5 className="font-semibold text-slate-700">Étape 3 : La Controverse S'installe</h5>
                            <p className="mt-1 text-slate-600">Malgré ses failles, cette étude et d'autres travaux ultérieurs imparfaits ont semé le doute, créant une controverse durable qui a nécessité des années de recherches rigoureuses pour être résolue.</p>
                        </div>
                    </div>
                 </InfoCard>
                <InfoCard title="La Résolution du Débat" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p>
                        Pour clarifier ce point, deux études contrôlées randomisées (<strong>Bellone et al., Ferrari et al.</strong>) ont été spécifiquement conçues pour analyser l'incidence des IDM de novo. Elles ont rigoureusement <strong>exclu les patients présentant des signes d'ischémie myocardique</strong> à l'admission.
                    </p>
                    <p className="mt-2">
                        Ces études ont démontré de manière concordante que la VNI était aussi efficace que la CPAP sur les paramètres cliniques et que le <strong>taux de survenue d'IDM n'était pas différent entre les deux techniques</strong>.
                    </p>
                    <p className="mt-2 font-bold">
                        Une méta-analyse actualisée incluant toutes les études pertinentes confirme l'absence de sur-risque avec un Risque Relatif de 1.31 (IC 95% [0.70–2.45], p=0.40).
                    </p>
                    <p className="mt-2 font-bold">
                        Conclusion : La VNI n'est pas nocive et peut être utilisée en toute sécurité dans l'OAP, au même titre que la CPAP, sans sur-risque d'infarctus du myocarde.
                    </p>
                </InfoCard>
            </div>
        </Accordion>

        <Accordion title="CPAP vs VNI (Bi-level) : Que Choisir en Pratique ?" icon={<SlidersHorizontal className="w-6 h-6"/>} variant="default">
             <p className="text-slate-700 mb-4 text-base">Bien que les deux modalités soient recommandées, la CPAP est souvent privilégiée pour sa simplicité.</p>
             <div className="grid md:grid-cols-2 gap-6">
                 <InfoCard title="Avantages de la CPAP" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <ul className="list-disc list-inside">
                        <li><strong>Simplicité :</strong> Un seul réglage, facile à mettre en place.</li>
                        <li><strong>Efficacité prouvée :</strong> De nombreuses études montrent une réduction du besoin d'intubation et une amélioration rapide.</li>
                        <li><strong>Coût :</strong> Moins chère et plus largement disponible.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Quand envisager la VNI (Bi-level) ?" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <ul className="list-disc list-inside">
                        <li><strong>Hypercapnie associée :</strong> L'aide inspiratoire peut aider à "laver" le CO₂.</li>
                        <li><strong>Épuisement musculaire important :</strong> Le support inspiratoire peut mieux soulager les muscles.</li>
                        <li><strong>Hypotension :</strong> La VNI (avec des pressions moyennes potentiellement plus basses) pourrait être mieux tolérée, bien que cela soit débattu.</li>
                    </ul>
                </InfoCard>
             </div>
        </Accordion>

        <Accordion title="Réglages Pratiques" icon={<Wrench className="w-6 h-6"/>} variant="default">
             <div className="grid md:grid-cols-2 gap-6">
                 <InfoCard title="Réglages CPAP" icon={<Wind className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside">
                        <li><strong>Pression initiale :</strong> 5 à 7 cmH₂O.</li>
                        <li><strong>Titration :</strong> Augmenter par paliers de 2 cmH₂O toutes les 5-10 minutes.</li>
                        <li><strong>Pression cible :</strong> <strong>8 à 12 cmH₂O</strong>.</li>
                        <li><strong>FiO₂ :</strong> Ajuster pour une SpO₂ supérieur à 92%.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="Réglages VNI (Bi-level)" icon={<Wind className="w-5 h-5"/>} variant="blue">
                    <ul className="list-disc list-inside">
                         <li><strong>EPAP (PEP) :</strong> <strong>8 à 12 cmH₂O</strong> (similaire à la CPAP).</li>
                         <li><strong>IPAP :</strong> Ajouter une aide inspiratoire faible (<strong>AI de 4 à 8 cmH₂O</strong>). IPAP = EPAP + AI.</li>
                         <li><strong>FiO₂ :</strong> Ajuster pour une SpO₂ supérieur à 92%.</li>
                    </ul>
                </InfoCard>
             </div>
        </Accordion>

        <Accordion title="Cas Particulier : OAP à Fonction Systolique Préservée (HFpEF)" icon={<Heart className="w-6 h-6"/>} variant="default">
            <p className="text-slate-700 mb-4 text-base">
                Une controverse a longtemps existé sur l'utilisation de la CPAP chez les patients en OAP avec une fonction systolique préservée (HFpEF), qui représentent une part importante des cas.
            </p>
            <div className="grid md:grid-cols-1 gap-6">
                <InfoCard title="La Controverse Théorique" icon={<AlertTriangle className="w-5 h-5"/>} variant="amber">
                    <p>
                        La principale crainte était que la <strong>réduction de la pré-charge</strong>, un effet majeur de la CPAP, puisse être délétère chez ces patients dont le remplissage ventriculaire est déjà altéré et qui sont donc plus "pré-charge dépendants". Une diminution du retour veineux risquerait de compromettre davantage le débit cardiaque.
                    </p>
                </InfoCard>
                <InfoCard title="Les Données Préliminaires Rassurantes (Bellone)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p>
                        Une première étude préliminaire a comparé des patients OAP avec FEVG préservée vs altérée, tous traités par CPAP à 10 cmH₂O et traitement médical standard.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Résultat clé :</strong> Le temps de résolution de l'OAP n'était <strong>pas significativement différent</strong> entre les deux groupes.</li>
                        <li><strong>Conclusion :</strong> Ces premiers résultats suggéraient déjà que la CPAP était bien tolérée et semblait aussi efficace dans les deux types d'insuffisance cardiaque.</li>
                    </ul>
                </InfoCard>
                <InfoCard title="La Confirmation par une Étude Plus Vaste (Bellone et al., 2018)" icon={<CheckCircle className="w-5 h-5"/>} variant="green">
                    <p>
                        Une étude observationnelle plus large (propensity score-based analysis) a ensuite confirmé ces résultats sur un plus grand nombre de patients.
                    </p>
                    <ul className="list-disc list-inside mt-2">
                        <li><strong>Aucune différence</strong> en termes de mortalité hospitalière ou de besoin d'intubation n'a été trouvée entre les groupes à FEVG préservée ou altérée.</li>
                        <li><strong>Conclusion définitive :</strong> La CPAP est une option <strong>sûre et efficace</strong> chez les patients avec OAP à fonction systolique préservée.</li>
                    </ul>
                </InfoCard>
            </div>
        </Accordion>
    </div>
);