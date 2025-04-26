# 使用官方的Node.js镜像作为基础镜像
FROM node:20-alpine

# 设置工作目录
WORKDIR /thrive

# 配置 npm 镜像源
RUN npm config set registry https://registry.npmmirror.com

# 复制package.json和package-lock.json
COPY package*.json .

# 安装依赖
RUN npm install

# 复制所有文件到工作目录
COPY . .

# 添加环境变量
ARG NEXT_PUBLIC_PROJECT_API
ENV NEXT_PUBLIC_PROJECT_API=$NEXT_PUBLIC_PROJECT_API

ARG NEXT_PUBLIC_CACHING_TIME
ENV NEXT_PUBLIC_CACHING_TIME=$NEXT_PUBLIC_CACHING_TIME

ARG NEXT_PUBLIC_GAODE_KEY_CODE
ENV NEXT_PUBLIC_GAODE_KEY_CODE=$NEXT_PUBLIC_GAODE_KEY_CODE
ARG NEXT_PUBLIC_GAODE_SECURITYJS_CODE
ENV NEXT_PUBLIC_GAODE_SECURITYJS_CODE=$NEXT_PUBLIC_GAODE_SECURITYJS_CODE

# 构建Next.js应用
RUN npm run build

# 暴露应用运行的端口
EXPOSE 9001

# 启动Next.js应用
CMD ["npm", "start"]