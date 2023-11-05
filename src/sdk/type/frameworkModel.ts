import { BranchModel } from './branchModel';
import { RaceModel } from './raceModel';
import { ProductCategoryModel } from './productCategoryModel';
import { PaymentModeModel } from './paymentModeModel';

export interface FrameworkModel {
  branches?: BranchModel[];
  selectedBranch: BranchModel;
  races?: RaceModel[];
  productCategories?: ProductCategoryModel[];
  paymentModes?: PaymentModeModel[];
}
