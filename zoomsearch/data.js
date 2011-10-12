(function() {
    var classes = [
        "dk.dbc.commons.types.ComparablePair",
        "dk.dbc.commons.types.StringLock",
        "dk.dbc.commons.types.Pair",
        "dk.dbc.commons.xml.XMLUtils",
        "dk.dbc.commons.string.StringUtils",
        "dk.dbc.commons.db.IDBConnection",
        "dk.dbc.commons.db.OracleDBPooledConnection",
        "dk.dbc.commons.db.PostgresqlDBConnection",
        "dk.dbc.commons.javascript.E4XXMLHeaderStripper",
        "dk.dbc.commons.os.FileHandler",
        "dk.dbc.commons.os.StreamHandler",
        "dk.dbc.opensearch.metadata.DBCBIB",
        "dk.dbc.opensearch.metadata.IMetaData",
        "dk.dbc.opensearch.metadata.AdministrationStream",
        "dk.dbc.opensearch.metadata.IPredicate",
        "dk.dbc.opensearch.fedora.FedoraObjectFieldsValue",
        "dk.dbc.opensearch.fedora.FcrepoModifier",
        "dk.dbc.opensearch.fedora.OpenSearchCondition",
        "dk.dbc.opensearch.fedora.ObjectRepositoryException",
        "dk.dbc.opensearch.fedora.FedoraRelsExt",
        "dk.dbc.opensearch.fedora.FoxmlDocument",
        "dk.dbc.opensearch.fedora.PID",
        "dk.dbc.opensearch.fedora.FcrepoUtils",
        "dk.dbc.opensearch.fedora.FcrepoReader",
        "dk.dbc.opensearch.fedora.FedoraNamespaceContext",
        "dk.dbc.opensearch.fedora.FedoraObjectFields",
        "dk.dbc.opensearch.config.DataBaseConfig",
        "dk.dbc.opensearch.config.DatadockConfig",
        "dk.dbc.opensearch.config.Config",
        "dk.dbc.opensearch.config.FedoraConfig",
        "dk.dbc.opensearch.config.PidManagerConfig",
        "dk.dbc.opensearch.config.FileSystemConfig",
        "dk.dbc.opensearch.config.HarvesterConfig",
        "dk.dbc.opensearch.helpers.ConvertCQLToFedoraConditions",
        "dk.dbc.opensearch.helpers.IShutdownMain",
        "dk.dbc.opensearch.helpers.OpensearchNamespaceContext",
        "dk.dbc.opensearch.helpers.CQLToLuceneQueryConverter",
        "dk.dbc.opensearch.helpers.Log4jConfiguration",
        "dk.dbc.opensearch.types.IIdentifier",
        "dk.dbc.opensearch.types.IObjectIdentifier",
        "dk.dbc.opensearch.types.ITargetField",
        "dk.dbc.opensearch.types.CargoObject",
        "dk.dbc.opensearch.types.CargoContainer",
        "dk.dbc.opensearch.types.CargoMimeType",
        "dk.dbc.opensearch.types.CargoObjectInfo",
        "dk.dbc.opensearch.types.TaskInfo",
        "dk.dbc.opensearch.types.DataStreamType",
        "dk.dbc.opensearch.datadock.DatadockMain",
        "dk.dbc.opensearch.datadock.DatadockPool",
        "dk.dbc.opensearch.datadock.DatadockManager",
        "dk.dbc.opensearch.datadock.DatadockThread",
        "dk.dbc.opensearch.plugins.SimpleGenericRelation",
        "dk.dbc.opensearch.plugins.StoreEnvironment",
        "dk.dbc.opensearch.plugins.ForceFedoraPid",
        "dk.dbc.opensearch.plugins.PurgeRelationsEnvironment",
        "dk.dbc.opensearch.plugins.MarcxchangeWorkRelationEnvironment",
        "dk.dbc.opensearch.plugins.XMLDCHarvester",
        "dk.dbc.opensearch.plugins.DocbookMergerEnvironment",
        "dk.dbc.opensearch.plugins.Store",
        "dk.dbc.opensearch.plugins.SimpleGenericRelationEnvironment",
        "dk.dbc.opensearch.plugins.MarcxchangeWorkRelation",
        "dk.dbc.opensearch.plugins.ForceFedoraPidEnvironment",
        "dk.dbc.opensearch.plugins.XMLDCHarvesterEnvironment",
        "dk.dbc.opensearch.plugins.DocbookMerger",
        "dk.dbc.opensearch.plugins.PurgeRelations",
        "dk.dbc.opensearch.plugins.RunScript",
        "dk.dbc.opensearch.harvest.HarvesterIOException",
        "dk.dbc.opensearch.harvest.HarvesterUnknownIdentifierException",
        "dk.dbc.opensearch.harvest.FileHarvestLight",
        "dk.dbc.opensearch.harvest.IHarvest",
        "dk.dbc.opensearch.harvest.ESHarvest",
        "dk.dbc.opensearch.harvest.FileIdentifier",
        "dk.dbc.opensearch.harvest.HarvesterInvalidStatusChangeException",
        "dk.dbc.opensearch.harvest.JobStatus",
        "dk.dbc.opensearch.javascript.JSFedoraPIDSearch",
        "dk.dbc.opensearch.javascript.JSFedoraCQLSearch",
        "dk.dbc.opensearch.javascript.JSRelationFunctions",
        "dk.dbc.opensearch.javascript.JSFedoraObjectModification",
        "dk.dbc.opensearch.javascript.JSFcrepoStreamReader",
        "dk.dbc.opensearch.os.XmlFileFilter",
        "dk.dbc.opensearch.os.FileFilter",
        "dk.dbc.opensearch.os.NoRefFileFilter",
        "dk.dbc.opensearch.os.PdfFileFilter",
        "dk.dbc.opensearch.pluginframework.PluginTask",
        "dk.dbc.opensearch.pluginframework.IPluginEnvironment",
        "dk.dbc.opensearch.pluginframework.PluginEnvironmentUtils",
        "dk.dbc.opensearch.pluginframework.PluginResolver",
        "dk.dbc.opensearch.pluginframework.IPluginResolver",
        "dk.dbc.opensearch.pluginframework.PluginException",
        "dk.dbc.opensearch.pluginframework.IPluggable",
        "dk.dbc.opensearch.pluginframework.FlowMapCreator"];
    //classes = ["a.a", "a.b.a", "a.b.b", "b.a", "c.a", "c.b"];
    //classes = ["a.a.a", "a.a.b"];
    classes = classes.map(function(s) { return s.split('.') });

    function buildTree(arr) {
        var prefix = arr[0][0];
        var result = [];
        var resultArr = [prefix];
        arr.forEach(function(elem) {
            if(elem[0] !== prefix) {
                result.push(resultArr);
                prefix = elem[0];
                resultArr = [prefix];
            }
            resultArr.push(elem.slice(1));
        });
        result.push(resultArr);

        result = result.map(function(elem) {
            if(elem.length > 2) {
                var t = buildTree(elem.slice(1));
                t.unshift(elem[0]);
                elem = t;
            }
            return elem;
        });
        return result;
    }

    function addWeight(arr) {
        if(Array.isArray(arr) && Array.length > 0) {
            //arr.reduce(function(a, b) { return a + b; } , -
        } else {
        }
        return arr;
    }
    data = buildTree(classes);
    data = addWeight(classes);
})();
