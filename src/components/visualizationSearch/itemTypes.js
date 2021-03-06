import i18n from '@dhis2/d2-i18n'
import {
    IconApps24,
    IconEmptyFrame24,
    IconFileDocument24,
    IconLink24,
    IconMail24,
    IconQuestion24,
    IconTable24,
    IconTextBox24,
    IconUser24,

    IconVisualizationArea24,
    IconVisualizationBar24,
    IconVisualizationBarStacked24,
    IconVisualizationColumnStacked24,
    IconVisualizationColumn24,
    IconVisualizationLineMulti24,
    IconVisualizationScatter24,
    IconVisualizationGauge24,
    IconVisualizationRadar24,
    IconVisualizationColumnMulti24,

    IconWorld24,
    IconVisualizationLine24,
    IconVisualizationPie24,
    IconVisualizationSingleValue24,
} from '@dhis2/ui'

// Item types
export const VISUALIZATION = 'VISUALIZATION'
export const REPORT_TABLE = 'REPORT_TABLE'
export const CHART = 'CHART'
export const MAP = 'MAP'
export const EVENT_REPORT = 'EVENT_REPORT'
export const EVENT_CHART = 'EVENT_CHART'
export const APP = 'APP'
export const REPORTS = 'REPORTS'
export const RESOURCES = 'RESOURCES'
export const USERS = 'USERS'
export const MESSAGES = 'MESSAGES'
export const TEXT = 'TEXT'
export const SPACER = 'SPACER'
export const PAGEBREAK = 'PAGEBREAK'
export const PRINT_TITLE_PAGE = 'PRINT_TITLE_PAGE'

export const STACKED_COLUMN = 'STACKED_COLUMN'
export const BAR = 'BAR'
export const STACKED_BAR = 'STACKED_BAR'
export const AREA = 'AREA'
export const RADAR = 'RADAR'
export const GAUGE = 'GAUGE'
export const YEAR_OVER_YEAR_LINE = 'YEAR_OVER_YEAR_LINE'
export const YEAR_OVER_YEAR_COLUMN = 'YEAR_OVER_YEAR_COLUMN'
export const SCATTER = 'SCATTER'

export const COLUMN = 'COLUMN'
export const LINE = 'LINE'
export const PIE = 'PIE'
export const SINGLE_VALUE = 'SINGLE_VALUE'
export const PIVOT_TABLE = 'PIVOT_TABLE'

const DOMAIN_TYPE_AGGREGATE = 'AGGREGATE'
const DOMAIN_TYPE_TRACKER = 'TRACKER'

// Dashboard helpers
export const isVisualizationType = item =>
    !!itemTypeMap[item.type]?.isVisualizationType
/*export const hasMapView = itemType =>
    itemTypeMap[itemType].domainType === DOMAIN_TYPE_AGGREGATE*/
/*export const isTrackerDomainType = itemType =>
    itemTypeMap[itemType].domainType === DOMAIN_TYPE_TRACKER*/
export const getDefaultItemCount = itemType =>
    itemTypeMap[itemType].defaultItemCount || 5
//export const getAppName = itemType => itemTypeMap[itemType].appName || ''

// Item type map
export const itemTypeMap = {
    [VISUALIZATION]: {
        id: VISUALIZATION,
        endPointName: 'visualizations',
        propName: 'visualization',
        pluralTitle: i18n.t('Visualizations'),
        isVisualizationType: true,
        appUrl: id => `dhis-web-data-visualizer/#/${id}`,
        appName: 'Data Visualizer',
        defaultItemCount: 10,
    },
    [REPORT_TABLE]: {
        id: REPORT_TABLE,
        endPointName: 'visualizations',
        dataStatisticsName: 'REPORT_TABLE_VIEW',
        propName: 'visualization',
        pluralTitle: i18n.t('Pivot tables'),
        domainType: DOMAIN_TYPE_AGGREGATE,
        isVisualizationType: true,
        appUrl: id => `dhis-web-data-visualizer/#/${id}`,
        appName: 'Data Visualizer',
    },
    [CHART]: {
        id: CHART,
        endPointName: 'visualizations',
        propName: 'visualization',
        dataStatisticsName: 'CHART_VIEW',
        pluralTitle: i18n.t('Charts'),
        domainType: DOMAIN_TYPE_AGGREGATE,
        isVisualizationType: true,
        appUrl: id => `dhis-web-data-visualizer/#/${id}`,
        appName: 'Data Visualizer',
    },
    [MAP]: {
        id: MAP,
        endPointName: 'maps',
        dataStatisticsName: 'MAP_VIEW',
        propName: 'map',
        pluralTitle: i18n.t('Maps'),
        domainType: DOMAIN_TYPE_AGGREGATE,
        isVisualizationType: true,
        appUrl: id => `dhis-web-maps/?id=${id}`,
        appName: 'Maps',
    },
    [EVENT_REPORT]: {
        id: EVENT_REPORT,
        endPointName: 'eventReports',
        propName: 'eventReport',
        pluralTitle: i18n.t('Event reports'),
        domainType: DOMAIN_TYPE_TRACKER,
        isVisualizationType: true,
        appUrl: id => `dhis-web-event-reports/?id=${id}`,
        appName: 'Event Reports',
    },
    [EVENT_CHART]: {
        id: EVENT_CHART,
        endPointName: 'eventCharts',
        propName: 'eventChart',
        pluralTitle: i18n.t('Event charts'),
        domainType: DOMAIN_TYPE_TRACKER,
        isVisualizationType: true,
        appUrl: id => `dhis-web-event-visualizer/?id=${id}`,
        appName: 'Event Visualizer',
    },
    [APP]: {
        endPointName: 'apps',
        propName: 'appKey',
        pluralTitle: i18n.t('Apps'),
    },
    [REPORTS]: {
        id: REPORTS,
        endPointName: 'reports',
        propName: 'reports',
        pluralTitle: i18n.t('Reports'),
        appUrl: (id, type) => {
            switch (type) {
                case 'HTML':
                    return `dhis-web-reports/#/standard-report/view/${id}`

                case 'JASPER_REPORT_TABLE':
                case 'JASPER_JDBC':
                default:
                    return `api/reports/${id}/data.pdf?t=${new Date().getTime()}`
            }
        },
    },
    [RESOURCES]: {
        id: RESOURCES,
        endPointName: 'resources',
        propName: 'resources',
        pluralTitle: i18n.t('Resources'),
        appUrl: id => `api/documents/${id}/data`,
    },
    [USERS]: {
        id: USERS,
        endPointName: 'users',
        propName: 'users',
        pluralTitle: i18n.t('Users'),
        appUrl: id => `dhis-web-dashboard-integration/profile.action?id=${id}`,
    },
    [TEXT]: {
        id: TEXT,
        propName: 'text',
    },
    [MESSAGES]: {
        propName: 'messages',
    },
    [SPACER]: {
        propName: 'text',
    },
    [PAGEBREAK]: {
        propName: 'text',
    },
    [PRINT_TITLE_PAGE]: {
        propName: 'text',
    },
}

//export const getEndPointName = type => itemTypeMap[type].endPointName

/*export const getDataStatisticsName = type =>
    itemTypeMap[type].dataStatisticsName || null*/

/*export const getItemUrl = (type, item, baseUrl) => {
    let url

    if (type === APP) {
        url = item.launchUrl
    }

    if (itemTypeMap[type] && itemTypeMap[type].appUrl) {
        url = `${baseUrl}/${itemTypeMap[type].appUrl(item.id, item.type)}`
    }

    return url
}*/

export const getItemIcon = type => {
    switch (type) {
        case REPORT_TABLE:
        case EVENT_REPORT:
            return IconTable24
        case REPORTS:
            return IconFileDocument24
        case CHART:
        case EVENT_CHART:
            return IconVisualizationColumn24
        case MAP:
            return IconWorld24
        case APP:
            return IconApps24
        case RESOURCES:
            return IconLink24
        case USERS:
            return IconUser24
        case TEXT:
            return IconTextBox24
        case MESSAGES:
            return IconMail24
        case SPACER:
            return IconEmptyFrame24
        
        case BAR:
            return IconVisualizationBar24
        case STACKED_COLUMN:
            return IconVisualizationColumnStacked24
        case STACKED_BAR:
            return IconVisualizationBarStacked24
        case AREA:
            return IconVisualizationArea24
        case RADAR:
            return IconVisualizationRadar24
        case YEAR_OVER_YEAR_LINE:
            return IconVisualizationLineMulti24
        case YEAR_OVER_YEAR_COLUMN:
            return IconVisualizationColumnMulti24
        case SCATTER:
            return IconVisualizationScatter24
        case GAUGE:
            return IconVisualizationGauge24


        case PIVOT_TABLE:
            return IconTable24
        case LINE:
            return IconVisualizationLine24
        case COLUMN:
            return IconVisualizationColumn24
        case PIE:
            return IconVisualizationPie24
        case SINGLE_VALUE:
            return IconVisualizationSingleValue24
        
        default:
            return IconQuestion24
    }
}

export const getVisualizationIcon = type => {
    switch (type) {
        case PIVOT_TABLE:
            return IconTable24
        case LINE:
            return IconVisualizationLine24
        case COLUMN:
            return IconVisualizationColumn24
        case PIE:
            return IconVisualizationPie24
        case SINGLE_VALUE:
            return IconVisualizationSingleValue24
    }
}