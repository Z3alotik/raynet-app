type Address = {
  id: number;
  city: string;
  country: string;
  name: string;
  province: string;
  street: string;
  zipCode: string;
  lat?: number; // Optional, as it can be null
  lng?: number; // Optional, as it can be null
};

type ContactInfo = {
  email: string;
  email2?: string; // Optional, as it can be null
  primary: boolean;
  tel1: string;
  tel1Type: string;
  tel2?: string; // Optional, as it can be null
  tel2Type?: string; // Optional, as it can be null
  www?: string; // Optional, as it can be null
  otherContact?: string; // Optional, as it can be null
};

type PrimaryAddress = {
  id: number;
  primary: boolean;
  contactAddress: boolean;
  address: Address;
  territory: {
    id: number;
    value: string;
  };
  contactInfo: ContactInfo;
  extIds?: any; // Optional, as it can be null
};

type ContactAddress = {
  id: number;
  primary: boolean;
  contactAddress: boolean;
  address: Address;
  territory: {
    id: number;
    value: string;
  };
  contactInfo: ContactInfo;
  extIds?: any; // Optional, as it can be null
};

type Category = {
  id: number;
  value: string;
};

type Turnover = {
  id: number;
  value: string;
};

type EconomyActivity = {
  id: number;
  value: string;
};

type CompanyClassification = {
  id: number;
  value: string;
};

type PaymentTerm = {
  id: number;
  value: string;
};

type ContactSource = {
  id: number;
  value: string;
};

type SecurityLevel = {
  id: number;
  name: string;
};

export type Client = {
  id: number;
  name: string;
  titleBefore?: string | null; // Optional, as it can be null
  firstName?: string | null; // Optional, as it can be null
  lastName?: string | null; // Optional, as it can be null
  titleAfter?: string | null; // Optional, as it can be null
  person: boolean;
  role: string;
  state: string;
  rating: string;
  owner: {
    id: number;
    fullName: string;
  };
  regNumber: string;
  taxNumber: string;
  taxNumber2?: string | null; // Optional, as it can be null
  taxPayer: string;
  bankAccount?: string | null; // Optional, as it can be null
  databox?: string | null; // Optional, as it can be null
  court?: string | null; // Optional, as it can be null
  primaryAddress: PrimaryAddress;
  contactAddress: ContactAddress;
  category: Category;
  turnover: Turnover;
  economyActivity: EconomyActivity;
  companyClassification1: CompanyClassification;
  companyClassification2: CompanyClassification;
  companyClassification3: CompanyClassification;
  paymentTerm: PaymentTerm;
  contactSource: ContactSource;
  birthday?: string | null; // Optional, as it can be null
  notice?: string | null; // Optional, as it can be null
  tags: string[]; // Assuming tags are an array of strings
  customFields?: any; // Optional, as it can be null
  rowInfo: {
    createdAt: string; // Date string
    createdBy: string; // Email or username
    updatedAt: string; // Date string
    updatedBy: string; // Email or username
    rowAccess?: any; // Optional, as it can be null
    rowState?: any; // Optional, as it can be null
  };
  securityLevel: SecurityLevel;
  inlineGdpr: {
    id: number;
    validFrom: string; // Date string
    validTill: string; // Date string
    legalTitle: string;
    templateName: string;
    gdprTemplate: number;
  }[];
  _version: number;
};

export interface ClientListProps {
  clients: Client[];
}
