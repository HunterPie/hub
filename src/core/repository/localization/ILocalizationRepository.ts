import {Localization} from "@/core/entity/localization/Localization";

export interface ILocalizationRepository {
    findLocalization(language: LocalizationLanguage): Promise<Localization | undefined>
}