export interface BaseMetadata {
    /**
     * 名称 为空则为对象名称
     */
    name?: string
    /**
     * 支持的服务器列表 为空则代表所有
     */
    servers?: string[]
}

export interface ControllerMetadata extends BaseMetadata {
    
}
