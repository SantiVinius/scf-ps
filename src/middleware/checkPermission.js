const user = require('../mock/fakeProfiles')

function checkPermissions(allowedPermissions) {
  return function (req, res, next) {
    // Verifica se o usuário tem as permissões necessárias
    const hasPermission = user.permissions.some(permission => allowedPermissions.includes(permission));

    if (!hasPermission) {
      // Usuário não tem permissão suficiente
      return res.status(403).json({ error: 'Acesso negado. Permissões insuficientes.' });
    }

    // Usuário tem permissão suficiente
    next();
  };
}

module.exports = checkPermissions;