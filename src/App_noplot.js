import React, { useState } from 'react';
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";
import ColorBar from "./colorBar";

import logo from './logo.svg';
import './pure-min.css';
import './grids-responsive-min.css';
import './App.css';




function App() {
  var diseaseList=[
  'Testicular cancer',
  'Kidney cancer',
  'Bladder cancer',
  'Brain and nervous system cancer',
  'Thyroid cancer',
  'Mesothelioma',
  'Hodgkin lymphoma',
  'Non-Hodgkin lymphoma',
  'Multiple myeloma',
  'Leukemia',
  'Other malignant neoplasms',
  'Rheumatic heart disease',
  'Ischemic heart disease',
  'Stroke',
  'Genital prolapse',
  'Premenstrual syndrome',
  'Thalassemias',
  'Psoriasis',
  'Cellulitis',
  'Pyoderma',
  'Scabies',
  'Fungal skin diseases',
  'Viral skin diseases',
  'Acne vulgaris',
  'Alopecia areata',
  'Pruritus',
  'Urticaria',
  'Decubitus ulcer',
  'Glaucoma',
  'Cataract',
  'Age-related macular degeneration',
  'Age-related and other hearing loss',
  'Other vision loss',
  'Trachoma',
  'Dengue',
  'Yellow fever',
  'Rabies',
  'Intestinal nematode infections',
  'Food-borne trematodiases',
  'Other neglected tropical diseases',
  'Maternal disorders',
  'Chronic obstructive pulmonary disease',
  'Silicosis',
  'Asbestosis',
  'Coal workers pneumoconiosis',
  'Other pneumoconiosis',
  'Asthma',
  'Interstitial lung disease and pulmonary sarcoidosis',
  'Other chronic respiratory diseases',
  'Cirrhosis and other chronic liver diseases',
  'Uterine fibroids',
  'Polycystic ovarian syndrome',
  'Female infertility',
  'Endometriosis',
  'Sickle cell disorders',
  'G6PD deficiency',
  'Endocrine, metabolic, blood, and immune disorders',
  'Diabetes mellitus type 1',
  'Diabetes mellitus type 2',
  'Atopic dermatitis',
  'Contact dermatitis',
  'Seborrhoeic dermatitis',
  'Maternal abortion and miscarriage',
  'Refraction disorders',
  'Near vision loss',
  'Neonatal preterm birth',
  'Neonatal encephalopathy due to birth asphyxia and trauma',
  'Neonatal sepsis and other neonatal infections',
  'Hemolytic disease and other neonatal jaundice',
  'Other neonatal disorders',
  'Nutritional deficiencies',
  'Syphilis',
  'Chlamydial infection',
  'Gonococcal infection',
  'Trichomoniasis',
  'Genital herpes',
  'Other sexually transmitted infections',
  'Acute hepatitis',
  'Non-venomous animal contact',
  'Foreign body',
  'Self-harm',
  'Self-harm by firearm',
  'Physical violence by firearm',
  'Physical violence by sharp object',
  'Physical violence by other means',
  'Malaria',
  'Chagas disease',
  'Visceral leishmaniasis',
  'Cutaneous and mucocutaneous leishmaniasis',
  'African trypanosomiasis',
  'Schistosomiasis',
  'Alcoholic cardiomyopathy',
  'Sexual violence',
  'Myocarditis',
  'Other cardiomyopathy',
  'Conflict and terrorism',
  'Invasive Non-typhoidal Salmonella (iNTS)',
  'Inguinal, femoral, and abdominal hernia',
  'Inflammatory bowel disease',
  'Vascular intestinal disorders',
  'Gallbladder and biliary diseases',
  'Pancreatitis',
  'Gastroesophageal reflux disease',
  "Alzheimer's disease and other dementias",
  "Parkinson's disease",
  'Epilepsy',
  'Multiple sclerosis',
  'Migraine',
  'Tension-type headache',
  'Esophageal cancer',
  'Stomach cancer',
  'Schizophrenia',
  'Alcohol use disorders',
  'Opioid use disorders',
  'Cocaine use disorders',
  'Amphetamine use disorders',
  'Cannabis use disorders',
  'Other drug use disorders',
  'Major depressive disorder',
  'Dysthymia',
  'Bipolar disorder',
  'Anxiety disorders',
  'Anorexia nervosa',
  'Bulimia nervosa',
  'Autism spectrum disorders',
  'Attention-deficit/hyperactivity disorder',
  'Motor neuron disease',
  'Sudden infant death syndrome',
  'Pedestrian road injuries',
  'Cyclist road injuries',
  'Cirrhosis and other chronic liver diseases due to alcohol use',
  'Peptic ulcer disease',
  'Gastritis and duodenitis',
  'Appendicitis',
  'Paralytic ileus and intestinal obstruction',
  'Paratyphoid fever',
  'Other intestinal infectious diseases',
  'Lower respiratory infections',
  'Upper respiratory infections',
  'Otitis media',
  'Meningitis',
  'Encephalitis',
  'Ovarian cancer',
  'Poisoning by other means',
  'Unintentional firearm injuries',
  'Other exposure to mechanical forces',
  'Adverse effects of medical treatment',
  'Venomous animal contact',
  'Exposure to forces of nature',
  'Maternal deaths aggravated by HIV/AIDS',
  'Thalassemias trait',
  'Sickle cell trait',
  'Environmental heat and cold exposure',
  'Ebola',
  'Executions and police conflict',
  'Zika virus',
  'Guinea worm disease',
  'Non-melanoma skin cancer',
  'Hypertensive heart disease',
  'Leprosy',
  'Other unspecified infectious diseases',
  'Liver cancer',
  'Liver cancer due to alcohol use',
  'Larynx cancer',
  'Tracheal, bronchus, and lung cancer',
  'Breast cancer',
  'Cervical cancer',
  'Uterine cancer',
  'Prostate cancer',
  'Colon and rectum cancer',
  'Lip and oral cavity cancer',
  'Nasopharynx cancer',
  'Other pharynx cancer',
  'Gallbladder and biliary tract cancer',
  'Pancreatic cancer',
  'Conduct disorder',
  'Idiopathic developmental intellectual disability',
  'Other mental disorders',
  'Diabetes mellitus',
  'Chronic kidney disease',
  'Cysticercosis',
  'Cystic echinococcosis',
  'Lymphatic filariasis',
  'Onchocerciasis',
  'Caries of deciduous teeth',
  'Caries of permanent teeth',
  'Periodontal diseases',
  'Edentulism and severe tooth loss',
  'Motorcyclist road injuries',
  'Motor vehicle road injuries',
  'Other road injuries',
  'Tuberculosis',
  'HIV/AIDS',
  'Other transport injuries',
  'Diarrheal diseases',
  'Typhoid fever',
  'Measles',
  'Varicella and herpes zoster',
  'Urinary tract infections',
  'Urolithiasis',
  'Falls',
  'Drowning',
  'Fire, heat, and hot substances',
  'Poisoning by carbon monoxide',
  'Atrial fibrillation and flutter',
  'Aortic aneurysm',
  'Peripheral artery disease',
  'Endocarditis',
  'Non-rheumatic valvular heart disease',
  'Other cardiovascular and circulatory diseases',
  'Congenital birth defects',
  'Congenital heart anomalies',
  'Orofacial clefts',
  'Down syndrome',
  'Turner syndrome',
  'Klinefelter syndrome',
  'Congenital musculoskeletal and limb anomalies',
  'Urogenital congenital anomalies',
  'Digestive congenital anomalies',
  'Low back pain',
  'Neck pain',
  'Gout',
  'Rheumatoid arthritis',
  'Osteoarthritis',
  'Diphtheria',
  'Whooping cough',
  'Tetanus',
  'Benign prostatic hyperplasia',
  'Male infertility',
  'Malignant skin melanoma']
  diseaseList.sort()
  diseaseList.unshift("All causes")
  var rateMax = {'All causes': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 142201.2879648702}},
  'Testicular cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 295.70007484014985}},
  'Kidney cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 346.6268824254643}},
  'Bladder cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 361.07998262726994}},
  'Brain and nervous system cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 363.6746235198317}},
  'Thyroid cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 57.81390936953356}},
  'Mesothelioma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 124.71615256758706}},
  'Hodgkin lymphoma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 133.5167443933823}},
  'Non-Hodgkin lymphoma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 502.2748661651644}},
  'Multiple myeloma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 284.1230275989743}},
  'Leukemia': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 540.3798754926981}},
  'Other malignant neoplasms': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 736.7546646006041}},
  'Rheumatic heart disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1391.6003114042546}},
  'Ischemic heart disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 14552.806494544018}},
  'Stroke': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 6229.9037723071415}},
  'Genital prolapse': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 19.31433231961716}},
  'Premenstrual syndrome': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 143.8564263232904}},
  'Thalassemias': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 252.35949514514584}},
  'Psoriasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 289.4830300544301}},
  'Cellulitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 85.72083449240225}},
  'Pyoderma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 274.8982703794446}},
  'Scabies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 158.952896185033}},
  'Fungal skin diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 175.79647057065839}},
  'Viral skin diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 101.96793830030524}},
  'Acne vulgaris': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 106.98782679950565}},
  'Alopecia areata': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 20.557788956581433}},
  'Pruritus': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 14.22839094005129}},
  'Urticaria': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 101.48508739506981}},
  'Decubitus ulcer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 256.98058086638076}},
  'Glaucoma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 35.41325276611381}},
  'Cataract': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 346.0065451318587}},
  'Age-related macular degeneration': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 47.229148080588345}},
  'Age-related and other hearing loss': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 872.9157889057146}},
  'Other vision loss': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 121.19847035998075}},
  'Trachoma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 80.5823859234736}},
  'Dengue': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 354.5627667432709}},
  'Yellow fever': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 431.75582891507895}},
  'Rabies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 427.55135121458846}},
  'Intestinal nematode infections': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 602.2996151775924}},
  'Food-borne trematodiases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 163.77790885765359}},
  'Other neglected tropical diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 579.5204477587652}},
  'Maternal disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3226.673412501362}},
  'Chronic obstructive pulmonary disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 4319.43887170519}},
  'Silicosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 40.96915045569978}},
  'Asbestosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 14.474755081985696}},
  'Coal workers pneumoconiosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 99.52861062298739}},
  'Other pneumoconiosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 30.414837160371235}},
  'Asthma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2304.767815139371}},
  'Interstitial lung disease and pulmonary sarcoidosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 276.8806569196032}},
  'Other chronic respiratory diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 782.772847270073}},
  'Cirrhosis and other chronic liver diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3567.1696193314237}},
  'Uterine fibroids': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 98.16540983531509}},
  'Polycystic ovarian syndrome': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 35.064438817928}},
  'Female infertility': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 29.15366665591303}},
  'Endometriosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 364.3425265362834}},
  'Sickle cell disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3003.8562639938045}},
  'G6PD deficiency': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 665.6148180931915}},
  'Endocrine, metabolic, blood, and immune disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 555.945724723738}},
  'Diabetes mellitus type 1': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 971.6030753467071}},
  'Diabetes mellitus type 2': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 5599.772326961535}},
  'Atopic dermatitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 316.2048321030622}},
  'Contact dermatitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 84.15567381095568}},
  'Seborrhoeic dermatitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 7.6734505960981}},
  'Maternal abortion and miscarriage': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 474.9425094399099}},
  'Refraction disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 221.2928900579562}},
  'Near vision loss': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 248.3502806689018}},
  'Neonatal preterm birth': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 10296.549094314161}},
  'Neonatal encephalopathy due to birth asphyxia and trauma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 8073.096296621989}},
  'Neonatal sepsis and other neonatal infections': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3075.3599131417695}},
  'Hemolytic disease and other neonatal jaundice': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1132.9788566563498}},
  'Other neonatal disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 5770.679157488776}},
  'Nutritional deficiencies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 23216.885893155188}},
  'Syphilis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2622.7124421915505}},
  'Chlamydial infection': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 15.975563804284388}},
  'Gonococcal infection': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 36.05505273609495}},
  'Trichomoniasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 22.15197556624088}},
  'Genital herpes': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 8.275703919848862}},
  'Other sexually transmitted infections': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 25.81406981965151}},
  'Acute hepatitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 722.5832342579814}},
  'Non-venomous animal contact': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 114.75133834228708}},
  'Foreign body': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1778.417045216552}},
  'Self-harm': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 6153.985620647857}},
  'Self-harm by firearm': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1794.6365991960486}},
  'Physical violence by firearm': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 5889.278993036626}},
  'Physical violence by sharp object': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2393.7703561606886}},
  'Physical violence by other means': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1972.6848024912772}},
  'Malaria': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 24179.612679180787}},
  'Chagas disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 183.56447701105446}},
  'Visceral leishmaniasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3351.0519638129426}},
  'Cutaneous and mucocutaneous leishmaniasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 539.5211869252927}},
  'African trypanosomiasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3461.8689472928772}},
  'Schistosomiasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 497.62432410240837}},
  'Alcoholic cardiomyopathy': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2918.0734472784584}},
  'Sexual violence': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 136.23654151847}},
  'Myocarditis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 180.50451608538316}},
  'Other cardiomyopathy': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1603.9690647013722}},
  'Conflict and terrorism': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 31511.12719895984}},
  'Invasive Non-typhoidal Salmonella (iNTS)': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2830.3020097436897}},
  'Inguinal, femoral, and abdominal hernia': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 208.3612394917944}},
  'Inflammatory bowel disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 120.04018836029935}},
  'Vascular intestinal disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 144.07693464132493}},
  'Gallbladder and biliary diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 117.43543916948637}},
  'Pancreatitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 591.424691725068}},
  'Gastroesophageal reflux disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 153.1318000870318}},
  "Alzheimer's disease and other dementias": {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1856.7522913886469}},
  "Parkinson's disease": {'DALYs (Disability-Adjusted Life Years)': {'Rate': 263.57433917330474}},
  'Epilepsy': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 949.8094699553036}},
  'Multiple sclerosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 123.45032835954716}},
  'Migraine': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1506.5291820163393}},
  'Tension-type headache': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 228.14650372933488}},
  'Esophageal cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 498.1024214198058}},
  'Stomach cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1170.4604487613597}},
  'Schizophrenia': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 269.6595135369081}},
  'Alcohol use disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2808.816353058838}},
  'Opioid use disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2540.7476656452004}},
  'Cocaine use disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 174.99176972484761}},
  'Amphetamine use disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 116.18314022870102}},
  'Cannabis use disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 50.424402403850884}},
  'Other drug use disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 301.9038216587063}},
  'Major depressive disorder': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1295.7950995978904}},
  'Dysthymia': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 276.8310250072372}},
  'Bipolar disorder': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 248.64106723522485}},
  'Anxiety disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 986.3162443527591}},
  'Anorexia nervosa': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 61.88235694009563}},
  'Bulimia nervosa': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 204.3686212298148}},
  'Autism spectrum disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 199.1786313251287}},
  'Attention-deficit/hyperactivity disorder': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 42.47735660764021}},
  'Motor neuron disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 90.50422412353666}},
  'Sudden infant death syndrome': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 611.2480726543429}},
  'Pedestrian road injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 4746.728671380611}},
  'Cyclist road injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 423.14832934047155}},
  'Cirrhosis and other chronic liver diseases due to alcohol use': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1566.8672298617803}},
  'Peptic ulcer disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 681.6540687077343}},
  'Gastritis and duodenitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 263.0733551298697}},
  'Appendicitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 191.9598870020464}},
  'Paralytic ileus and intestinal obstruction': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 510.32909633900215}},
  'Paratyphoid fever': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 156.0152902564519}},
  'Other intestinal infectious diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 82.53995297464012}},
  'Lower respiratory infections': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 20224.73410267341}},
  'Upper respiratory infections': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 348.3400060978974}},
  'Otitis media': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 69.06078139115138}},
  'Meningitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 11060.191760328802}},
  'Encephalitis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 454.26372735077297}},
  'Ovarian cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 488.2874809922296}},
  'Poisoning by other means': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 520.8299286845308}},
  'Unintentional firearm injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 589.7403003418548}},
  'Other exposure to mechanical forces': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1566.936086806366}},
  'Adverse effects of medical treatment': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 514.4822088964803}},
  'Venomous animal contact': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 367.21557674826215}},
  'Exposure to forces of nature': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 4320.668704668549}},
  'Maternal deaths aggravated by HIV/AIDS': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 114.03465249231562}},
  'Thalassemias trait': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 272.1305826243518}},
  'Sickle cell trait': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 133.58768269747537}},
  'Environmental heat and cold exposure': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 991.3767089991946}},
  'Ebola': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 76.90610503618477}},
  'Executions and police conflict': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1522.9711398882948}},
  'Zika virus': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 36.29743582715766}},
  'Guinea worm disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 15.749465802082625}},
  'Non-melanoma skin cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 90.37525993691162}},
  'Hypertensive heart disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1648.2237129877785}},
  'Leprosy': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 8.554402863854731}},
  'Other unspecified infectious diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1055.039027037968}},
  'Liver cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2109.272525368598}},
  'Liver cancer due to alcohol use': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 648.1363288326352}},
  'Larynx cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 349.64951528748077}},
  'Tracheal, bronchus, and lung cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3383.8135661305087}},
  'Breast cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1360.9683410951802}},
  'Cervical cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1104.384871329559}},
  'Uterine cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 291.41774505852396}},
  'Prostate cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2117.6418839956577}},
  'Colon and rectum cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1309.6504984549827}},
  'Lip and oral cavity cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 521.9961177130655}},
  'Nasopharynx cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 241.19640485698181}},
  'Other pharynx cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 469.170731477875}},
  'Gallbladder and biliary tract cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 445.7346058774254}},
  'Pancreatic cancer': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 512.6594195552024}},
  'Conduct disorder': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 190.64433251389065}},
  'Idiopathic developmental intellectual disability': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 296.0701279644408}},
  'Other mental disorders': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 244.55526050468296}},
  'Diabetes mellitus': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 6020.499689395677}},
  'Chronic kidney disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2532.580140945479}},
  'Cysticercosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 167.2070693021097}},
  'Cystic echinococcosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 44.21660827330575}},
  'Lymphatic filariasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1566.954925984081}},
  'Onchocerciasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1553.560243645918}},
  'Caries of deciduous teeth': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 6.713295416592843}},
  'Caries of permanent teeth': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 50.40703230913293}},
  'Periodontal diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 176.5761156186421}},
  'Edentulism and severe tooth loss': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 400.0827464700403}},
  'Motorcyclist road injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2430.234678420537}},
  'Motor vehicle road injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3492.9334777080253}},
  'Other road injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 105.7096951453601}},
  'Tuberculosis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 10465.327820555212}},
  'HIV/AIDS': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 55763.91173745555}},
  'Other transport injuries': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1201.3891892525592}},
  'Diarrheal diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 31653.13813525969}},
  'Typhoid fever': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1414.4528798050007}},
  'Measles': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 12319.924422255242}},
  'Varicella and herpes zoster': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 193.82975990592936}},
  'Urinary tract infections': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 280.41700399981784}},
  'Urolithiasis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 45.29750974844967}},
  'Falls': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2477.331416820263}},
  'Drowning': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3036.9096038084663}},
  'Fire, heat, and hot substances': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 876.9326300618635}},
  'Poisoning by carbon monoxide': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 519.4872463178833}},
  'Atrial fibrillation and flutter': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 353.96494525336345}},
  'Aortic aneurysm': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 365.6243774326928}},
  'Peripheral artery disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 161.1190655869756}},
  'Endocarditis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 203.471348311911}},
  'Non-rheumatic valvular heart disease': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 200.41029567052496}},
  'Other cardiovascular and circulatory diseases': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1853.1572313279542}},
  'Congenital birth defects': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 7019.908715501043}},
  'Congenital heart anomalies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3165.8376448366353}},
  'Orofacial clefts': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 275.01960098081906}},
  'Down syndrome': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 381.6155187154553}},
  'Turner syndrome': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1.3310826888348222}},
  'Klinefelter syndrome': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1.0019280399915964}},
  'Congenital musculoskeletal and limb anomalies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 211.08559698879742}},
  'Urogenital congenital anomalies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 139.00536218636685}},
  'Digestive congenital anomalies': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 944.9848034011967}},
  'Low back pain': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 2530.2146275743094}},
  'Neck pain': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 1005.4502638281341}},
  'Gout': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 108.87115077104811}},
  'Rheumatoid arthritis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 188.6615870092699}},
  'Osteoarthritis': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 452.1015616549372}},
  'Diphtheria': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 445.5499952897386}},
  'Whooping cough': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3327.7271965711147}},
  'Tetanus': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 3699.0653439119537}},
  'Benign prostatic hyperplasia': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 242.85655379637635}},
  'Male infertility': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 14.467071536353016}},
  'Malignant skin melanoma': {'DALYs (Disability-Adjusted Life Years)': {'Rate': 238.21047040830948}}}

  Object.keys(rateMax).forEach(key => {
    if(String(rateMax[key]["DALYs (Disability-Adjusted Life Years)"].Rate)==="0"){
        //delete rateMax[key];
        diseaseList= diseaseList.filter(function(item){
          return item !== key;
        })
    }
  });
  const [content, setContent] = useState("");
  const [disease, setDisease] = useState(diseaseList[0])
  const [year, setYear] = useState("2017")
  const [measure, setMeasure] = useState("DALYs (Disability-Adjusted Life Years)")
  const [metric, setMetric] = useState("Rate")
  const [sex, setSex] = useState("Both")
  /* const [diseaseTmp, setDiseaseTmp] = useState("") */

  
  return (
    <div className="mainContainer">
      <div className="pure-g">
        <div className="pure-u-1 pure-u-md-1-2">
          <div style={{paddingLeft:"30px", paddingTop:"0px"}}>
            <h1>Disability-adjusted life years (DALYs)</h1>
          </div>
        </div>
        
        <div className="pure-u-1 pure-u-md-1-2" style={{textAlign:"right"}}>
          <div className="pure-menu pure-menu-horizontal">
              <a href="#" className="pure-menu-heading pure-menu-link">HOME</a>
              <ul className="pure-menu-list">
                  <li className="pure-menu-item">
                      <a href="#" className="pure-menu-link">Projects</a>
                  </li>
                  <li className="pure-menu-item">
                      <a href="#" className="pure-menu-link">About</a>
                  </li>
                  <li className="pure-menu-item">
                      <a href="#" className="pure-menu-link">Contact</a>
                  </li>
              </ul>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-18-24">
          
          <div className="mapContainer">
          <MapChart 
            setTooltipContent={setContent}
            diseaseChoice={disease}
            sexChoice={sex}
            yearChoice={year}
            metricChoice={metric}
            measureChoice={measure}
            rateMax={rateMax}
          />
          <ReactTooltip className='custTip' html={true}>{content}</ReactTooltip>
          
          </div>
          
        </div>
        <div className="pure-u-1 pure-u-md-6-24">
          <div className="textContainer">
            <p>
              The disability-adjusted life year (DALY) is a measure of overall disease burden. It 
              combines mortality and morbidity into a single metric.
            </p>
            <p>
              This means that the DALY includes not just the years lost due to premature death, but also years
              of "healthy" life lost due to illness or disability.
            </p>
            <p>
              Select a cause of death or illness below to view its distribution on the world map.
            </p> 
            <p>
              Data can be viewed for 1997, 2007 and 2017, for males, females or both combined. Change these
              selections with the sliders below.
            </p>
            
            
          </div>
          <br />
          <div className="textContainer">
            <h3>Options</h3>
            
            <form className="pure-form pure-form-stacked">
              <fieldset>
                <label htmlFor="diseaseSelect">Show data for: </label>
                <select name="diseaseSelect" style={{width:"100%"}} onChange={(e) => setDisease(e.target.value)}>
                  {diseaseList.map((object, i) => <option key={i} value={object}>{object}</option>)}
                </select>
                <br/>
                
                <label htmlFor="sexSelect">Biological sex: </label>
                {/* <select name="sexSelect" style={{width:"100%"}} onChange={(e) => setSex(e.target.value)}>
                  {["Both","Male","Female"].map((object, i) => <option key={i} value={object}>{object}</option>)}
                </select> */}
                
                <div className="slidecontainer">
                  <input name="sexSelect" type="range" min="0" max="2" step="1" defaultValue="1" className="slider" id="myRange" onChange={(e) => setSex(["Male","Both","Female"][e.target.value])}/>
                  
                </div>
                <table className="rangeTableLabel">
                  <tbody>
                    <tr>
                    <td style={{width:"33%",textAlign:"left"}}>Male</td>
                    <td style={{width:"33%",textAlign:"center"}}>Both</td>
                    <td style={{width:"33%",textAlign:"right"}}>Female</td>
                  </tr>
                  </tbody>
                </table>
                <br/>
                
                <label htmlFor="yearSelect">Year: </label>
                {/* <select name="yearSelect" style={{width:"100%"}} onChange={(e) => setYear(e.target.value)}>
                  {["2017","2007","1997"].map((object, i) => <option key={i} value={object}>{object}</option>)}
                </select> */}
                <div className="slidecontainer">
                  <input name="yearSelect" type="range" min="0" max="2" step="1" defaultValue="2" className="slider" id="myRange" onChange={(e) => setYear(["1997","2007","2017"][e.target.value])}/>
                  
                </div>
                <table className="rangeTableLabel">
                  <tbody>
                    <tr>
                    <td style={{width:"33%",textAlign:"left"}}>1997</td>
                    <td style={{width:"33%",textAlign:"center"}}>2007</td>
                    <td style={{width:"33%",textAlign:"right"}}>2017</td>
                  </tr>
                  </tbody>
                </table>
                
              </fieldset>
            </form>
            
          </div>
          <br/>
          <div className="textContainer" style={{textAlign:"center"}}>
            <p><b>Color bar</b></p>
          <ColorBar diseaseMax = { rateMax[disease]["DALYs (Disability-Adjusted Life Years)"].Rate }/>
          </div>
          <div style={{textAlign:"right", paddingTop:"10px"}}>
            <small>
              {/* Map created using <a href="https://www.react-simple-maps.io/">react-simple-maps</a><br/> */}
              DALY data from <a className="aText" href="http://ghdx.healthdata.org/gbd-results-tool">Global Burden of Disease Collaborative Network</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
