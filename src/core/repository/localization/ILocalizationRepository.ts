export interface ILocalizationRepository {
    findLocalization(language: LocalizationLanguage): Promise<Localization | undefined>
}