type Address = {
  id: number;
  city: string;
  country: string;
  name: string;
  province: string;
  street: string;
  zipCode: string;
  lat?: number;
  lng?: number;
};

type ContactInfo = {
  email: string;
  email2?: string;
  primary: boolean;
  tel1: string;
  tel1Type: string;
  tel2?: string;
  tel2Type?: string;
  www?: string;
  otherContact?: string;
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
  extIds?: any;
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
  extIds?: any;
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
  titleBefore?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  titleAfter?: string | null;
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
  taxNumber2?: string | null;
  taxPayer: string;
  bankAccount?: string | null;
  databox?: string | null;
  court?: string | null;
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
  birthday?: string | null;
  notice?: string | null;
  tags: string[];
  customFields?: any;
  rowInfo: {
    createdAt: string;
    createdBy: string;
    updatedAt: string;
    updatedBy: string;
    rowAccess?: any;
    rowState?: any;
  };
  securityLevel: SecurityLevel;
  inlineGdpr: {
    id: number;
    validFrom: string;
    validTill: string;
    legalTitle: string;
    templateName: string;
    gdprTemplate: number;
  }[];
  _version: number;
};

export interface ClientListProps {
  clients: Client[];
}
