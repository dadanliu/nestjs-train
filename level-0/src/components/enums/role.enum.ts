/**
 * 系统级别用户权限
 */
export enum ERole {
  projectMaster = 1, //  系统管理员
  normal = 2, //  一般用户
  guest = -1 //  游客
}

/**
 * 是否被删除
 */
export enum EStatus {
  removed = 0,
  inUse = 1
}

export const isProjectManager = (role: ERole) => {
  return role === ERole.projectMaster;
};
