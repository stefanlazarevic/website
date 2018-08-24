export default interface ICareer {
    TITLE: string,
    START_DATE: Date,
    END_DATE: Date,
    ABOUT: string,
    ROLES: Array<{
        TITLE: string,
        DESCRIPTION: string,
        ROLES: Array<{
            LABEL: string,
            LINK: string,
            DOWNLOAD: boolean
        }>,
    }>,
}
