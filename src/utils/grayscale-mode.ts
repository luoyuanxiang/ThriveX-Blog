class GrayscaleController {
    // 配置需要启用灰度模式的日期列表（格式：YYYY-MM-DD）
    private grayscaleDates: string[];
    // 灰度样式元素ID
    private static readonly STYLE_ID = 'grayscale-style';

    constructor(customDates?: string[]) {
        this.grayscaleDates = [...new Set([...(customDates || [])])];
        this.init();
    }

    /**
     * 初始化方法，页面加载时检查日期并决定是否启用灰度
     */
    private init(): void {
        if (this.shouldEnableGrayscale()) {
            this.enableGrayscale();
        } else {
            this.disableGrayscale();
        }
    }

    /**
     * 检查当前日期是否需要启用灰度模式
     * @returns 是否需要启用灰度模式
     */
    private shouldEnableGrayscale(): boolean {
        const today = this.getFormattedDate();
        return this.grayscaleDates.includes(today);
    }

    /**
     * 获取格式化的当前日期（MM-DD）
     * @returns 格式化的日期字符串
     */
    private getFormattedDate(): string {
        const date = new Date();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}-${day}`;
    }

    /**
     * 启用灰度模式
     */
    public enableGrayscale(): void {
        let styleElement = document.getElementById(GrayscaleController.STYLE_ID);

        // 如果样式元素不存在则创建
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = GrayscaleController.STYLE_ID;
            document.head.appendChild(styleElement);
        }

        // 设置灰度滤镜样式，兼容多种浏览器
        styleElement.textContent = `
            html {
                filter: grayscale(100%);
                -webkit-filter: grayscale(100%);
                -moz-filter: grayscale(100%);
                -ms-filter: grayscale(100%);
                -o-filter: grayscale(100%);
                filter: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grayscale'%3E%3CfeColorMatrix type='matrix' values='0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0'/%3E%3C/filter%3E%3C/svg%3E#grayscale");
                filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
                -webkit-filter: grayscale(1);
                transition: filter 0.3s ease-in-out;
            }
        `;
    }

    /**
     * 禁用灰度模式
     */
    public disableGrayscale(): void {
        const styleElement = document.getElementById(GrayscaleController.STYLE_ID);
        if (styleElement) {
            styleElement.remove();
        }
    }

    /**
     * 手动切换灰度模式
     * @returns 当前灰度模式状态（true为启用，false为禁用）
     */
    public toggleGrayscale(): boolean {
        const isEnabled = !!document.getElementById(GrayscaleController.STYLE_ID);
        if (isEnabled) {
            this.disableGrayscale();
        } else {
            this.enableGrayscale();
        }
        return !isEnabled;
    }

    /**
     * 添加额外的灰度日期
     * @param dates 要添加的日期列表
     */
    public addGrayscaleDates(dates: string[]): void {
        const newDates = dates.filter(date => !this.grayscaleDates.includes(date));
        this.grayscaleDates = [...this.grayscaleDates, ...newDates];
        this.init(); // 重新检查日期
    }

    /**
     * 获取当前配置的灰度日期
     * @returns 灰度日期列表
     */
    public getGrayscaleDates(): string[] {
        return [...this.grayscaleDates]; // 返回副本，防止外部修改
    }
}

// 导出类供其他模块使用（如果需要）
export default GrayscaleController;
