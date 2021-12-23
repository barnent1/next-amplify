import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProspectsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Prospects {
  readonly id: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Prospects, ProspectsMetaData>);
  static copyOf(source: Prospects, mutator: (draft: MutableModel<Prospects, ProspectsMetaData>) => MutableModel<Prospects, ProspectsMetaData> | void): Prospects;
}