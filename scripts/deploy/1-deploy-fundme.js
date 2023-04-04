

module.exports = async ({getNamedAccounts, deployments})=>{
    const {deploy, log} = deployments;

    const {deployer} = await getNamedAccounts();
}