
import React from 'react';
import { ListChecks, CheckCircle, XCircle, AlertTriangle, Shield, Heart, Lungs, ShieldX, Users } from './icons';
import { Accordion } from './Accordion';

const Recommendation: React.FC<{ title: string, strength: string, details: string, icon: React.ReactNode, variant: 'strong' | 'conditional' | 'not-recommended' }> = ({ title, strength, details, icon, variant }) => {
    const colors = {
        strong: 'border-green-500 bg-green-50',
        conditional: 'border-blue-500 bg-blue-50',
        'not-recommended': 'border-amber-500 bg-amber-50'
    };
    const strengthColors = {
        strong: 'bg-green-100 text-green-800',
        conditional: 'bg-blue-100 text-blue-800',
        'not-recommended': 'bg-amber-100 text-amber-800'
    }

    return (
        <div className={`p-4 rounded-lg border-l-4 ${colors[variant]}`}>
            <div className="flex items-start">
                <div className="flex-shrink-0">{icon}</div>
                <div className="ml-4">
                    <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
                    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full mt-1 mb-2 ${strengthColors[variant]}`}>{strength}</span>
                    <p className="text-slate-700 text-base" dangerouslySetInnerHTML={{ __html: details }}></p>
                </div>
            </div>
        </div>
    );
};


const ContraindicationList: React.FC<{ title: string, items: string[], icon: React.ReactNode, variant: 'danger' | 'warning' }> = ({ title, items, icon, variant }) => {
    const colors = {
        danger: { text: 'text-red-800' },
        warning: { text: 'text-amber-800' }
    };
    return (
        <div>
            <h4 className={`font-semibold text-lg flex items-center mb-3 ${colors[variant].text}`}>
                {icon}
                <span className="ml-2">{title}</span>
            </h4>
            <ul className="list-disc list-inside space-y-2 pl-2 text-slate-700">
                {items.map((item, index) => <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>)}
            </ul>
        </div>
    );
};

export const IndicationsSection: React.FC = () => (
  <div className="space-y-8 animate-fade-in">
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
      <h2 className="text-3xl font-bold text-slate-900 flex items-center">
        <ListChecks className="w-8 h-8 mr-4 text-indigo-600" />
        Indications & Contre-indications
      </h2>
      <p className="mt-2 text-slate-600 text-base">
        Identifier les bons candidats pour la VNI, basé sur les dernières recommandations ERS/ATS.
      </p>
    </div>

    <Accordion title="Indications Fortement Recommandées" icon={<CheckCircle className="w-6 h-6"/>} variant="success">
        <div className="space-y-4">
            <Recommendation
                title="BPCO en Acidose Respiratoire"
                strength="Recommandation Forte - Haute certitude"
                details="La VNI Bi-niveau est le traitement de choix pour l'insuffisance respiratoire aiguë (IRA) hypercapnique (<strong>pH &lt; 7.35</strong>) sur BPCO. Elle réduit le besoin d'intubation et la mortalité. La recommandation est encore plus forte pour les pH entre 7.25 et 7.35."
                icon={<Lungs className="w-8 h-8 text-green-600"/>}
                variant="strong"
            />
            <Recommendation
                title="Œdème Aigu du Poumon Cardiogénique"
                strength="Recommandation Forte - Certitude modérée"
                details="La CPAP ou la VNI Bi-niveau sont fortement recommandées. Ces modes améliorent la dyspnée et les paramètres physiologiques en diminuant la pré-charge et la post-charge VG."
                icon={<Heart className="w-8 h-8 text-green-600"/>}
                variant="strong"
            />
        </div>
    </Accordion>

    <Accordion title="Indications Conditionnelles (Bénéfice variable)" icon={<AlertTriangle className="w-6 h-6"/>} variant="default">
        <div className="space-y-4">
             <Recommendation
                title="Post-extubation (Prévention chez patients à haut risque)"
                strength="Recommandation Conditionnelle"
                details="La VNI est suggérée pour <strong>prévenir</strong> l'échec d'extubation chez les patients à haut risque (ex: &gt;65 ans, comorbidités cardiaques, hypercapnie, toux inefficace). Elle réduit l'incidence de l'IRA post-extubation et la mortalité en USI dans ce groupe."
                icon={<Shield className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
            <Recommendation
                title="IRA Post-opératoire"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI peut être utilisée pour traiter l'IRA hypoxémique après une chirurgie thoracique ou abdominale pour réduire le taux d'intubation et la mortalité hospitalière."
                icon={<Shield className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
            <Recommendation
                title="Patients Immunodéprimés"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI précoce peut être une option pour éviter l'intubation et ses complications infectieuses, bien que les études récentes ne montrent pas toujours un avantage clair par rapport à l'oxygénothérapie standard."
                icon={<Users className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
            <Recommendation
                title="Traumatisme Thoracique"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI peut être utilisée chez les patients victimes de traumatisme thoracique pour améliorer l'oxygénation et potentiellement réduire la durée de séjour en soins intensifs."
                icon={<Shield className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
             <Recommendation
                title="Soins Palliatifs"
                strength="Recommandation Conditionnelle - Certitude modérée"
                details="La VNI peut être proposée pour soulager la dyspnée chez les patients en fin de vie (cancer ou autres maladies terminales), si elle est bien tolérée."
                icon={<Heart className="w-8 h-8 text-blue-600"/>}
                variant="conditional"
            />
        </div>
    </Accordion>

    <Accordion title="Utilisations Non Recommandées ou Incertaines" icon={<XCircle className="w-6 h-6"/>} variant="danger">
         <div className="space-y-4">
            <Recommendation
                title="Prévention de l'Échec d'Extubation (tous venants)"
                strength="Non recommandé"
                details="L'utilisation de la VNI est <strong>déconseillée</strong> pour prévenir systématiquement l'échec d'extubation chez les patients non sélectionnés ou à faible risque."
                icon={<ShieldX className="w-8 h-8 text-amber-600"/>}
                variant="not-recommended"
            />
            <Recommendation
                title="Traitement de l'Échec d'Extubation"
                strength="Non recommandé"
                details="L'utilisation de la VNI est <strong>déconseillée</strong> pour traiter une insuffisance respiratoire post-extubation déjà installée. La réintubation ne doit pas être retardée, car l'échec de la VNI dans ce contexte augmente la mortalité."
                icon={<ShieldX className="w-8 h-8 text-amber-600"/>}
                variant="not-recommended"
            />
             <Recommendation
                title="Crise d'Asthme Aiguë"
                strength="Recommandation non formulée"
                details="Les données actuelles sont insuffisantes pour formuler une recommandation. Son utilisation reste à la discrétion du clinicien avec une surveillance très étroite."
                icon={<AlertTriangle className="w-8 h-8 text-amber-600"/>}
                variant="not-recommended"
            />
        </div>
    </Accordion>
    
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h3 className="text-xl font-bold text-slate-800 mb-4">Contre-indications Générales</h3>
        <div className="grid md:grid-cols-2 gap-8">
            <ContraindicationList 
                title="Contre-indications Absolues"
                icon={<XCircle className="w-6 h-6"/>}
                variant="danger"
                items={[
                    "Arrêt cardiaque ou respiratoire.",
                    "Instabilité hémodynamique sévère (choc, arythmies ventriculaires...).",
                    "Coma, encéphalopathie sévère (incapacité à protéger les voies aériennes).",
                    "Obstruction des voies aériennes supérieures.",
                    "Traumatisme facial majeur ou chirurgie récente empêchant l'ajustement du masque.",
                    "Hémorragie digestive haute active ou vomissements incoercibles."
                ]}
            />
            <ContraindicationList 
                title="Contre-indications Relatives"
                icon={<AlertTriangle className="w-6 h-6"/>}
                variant="warning"
                items={[
                    "Agitation ou anxiété extrêmes.",
                    "Patient non coopératif.",
                    "Sécrétions bronchiques abondantes et difficiles à gérer.",
                    "Chirurgie œsophagienne ou gastrique récente."
                ]}
            />
        </div>
    </div>
  </div>
);